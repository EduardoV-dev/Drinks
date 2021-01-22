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
  saveDrinksByCategory
} from '../../../utils/drinks';
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
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { categories, selectedCategory, drinks } = state;

  const handleCategories = pipe(
    fetchCategories,
    saveCategories(dispatch)
  );

  const handleSelectCategory = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(dispatch, target.value);

  const handleDrinksByCategory = pipe(
    searchByCategory,
    saveDrinksByCategory(dispatch)
  );

  return (
    <drinksContext.Provider
      value={{
        categories,
        selectedCategory,
        drinks,
        handleCategories,
        handleSelectCategory,
        handleDrinksByCategory
      }}
    >
      {children}
    </drinksContext.Provider>
  );
}

export default DrinksProvider;