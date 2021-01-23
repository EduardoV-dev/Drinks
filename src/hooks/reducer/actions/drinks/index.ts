import {
  IAction
} from '../../../../models/drinks';
import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SAVE_DRINKS,
  ERROR,
  SET_DRINK_ID,
  SAVE_DRINK_INFO,
  DISPLAY_MODAL
} from '../../types/drinks';

export const saveCategoriesAction = (categories: []): IAction => ({
  type: SAVE_CATEGORIES,
  payload: categories
});

export const setSelectedCategoryAction = (category: string): IAction => ({
  type: SET_SELECTED_CATEGORY,
  payload: category
});

export const saveDrinksAction = (drinks: []): IAction => ({
  type: SAVE_DRINKS,
  payload: drinks
});

export const handleErrorAction = (): IAction => ({
  type: ERROR
});

export const saveDrinkIdAction = (drinkId: number): IAction => ({
  type: SET_DRINK_ID,
  payload: drinkId
});

export const saveDrinkInformationAction = (drinkInfo: any): IAction => ({
  type: SAVE_DRINK_INFO,
  payload: drinkInfo
});

export const displayModalAction = (modalState: boolean): IAction => ({
  type: DISPLAY_MODAL,
  payload: modalState
});