import React, { createContext, useReducer } from 'react';
import reducer from '../../reducer/drinks';
import {
  IState
} from '../../../models/drinks';
import {
  fetchCategories,
  saveCategories,
  searchByCategory,
  setSelectedCategory,
  saveDrinksByCategory,
  saveDrinkID,
  searchDrinkInfo,
  saveDrinkInfo
} from '../../../utils/drinks';
import {
  showModal
} from '../../../utils/modal';
import {
  pipe
} from '../../../utils/common';

export const drinksContext = createContext<any>({});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DrinksProvider: React.FC<Props> = ({
  children
}) => {
  const initialState: IState = {
    categories: [],
    selectedCategory: 'Ordinary Drink',
    drinks: [],
    error: false,
    drinkId: null,
    drinkInfo: null,
    modalState: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    categories,
    selectedCategory,
    drinks,
    drinkId,
    drinkInfo,
    modalState
  } = state;

  const handleCategories = pipe(
    fetchCategories(dispatch),
    saveCategories(dispatch)
  );

  const handleSelectCategory = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(dispatch, target.value);

  const handleDrinksByCategory = pipe(
    searchByCategory(dispatch),
    saveDrinksByCategory(dispatch)
  );

  const handleDrinkId = pipe(
    saveDrinkID(dispatch),
    showModal(dispatch)
  );

  const handleSearchDrinkInfo = pipe(
    searchDrinkInfo(dispatch),
    saveDrinkInfo(dispatch)
  );

  const hideModal = () => {
    showModal(dispatch)(false);
    saveDrinkInfo(dispatch)(null);
  }

  return (
    <drinksContext.Provider
      value={{
        categories,
        selectedCategory,
        drinks,
        drinkId,
        drinkInfo,
        modalState,
        handleCategories,
        handleSelectCategory,
        handleDrinksByCategory,
        handleDrinkId,
        handleSearchDrinkInfo,
        hideModal
      }}
    >
      {children}
    </drinksContext.Provider>
  );
}

export default DrinksProvider;