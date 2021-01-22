import {
  IAction
} from '../../../../models/drinks';
import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SAVE_DRINKS
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