import React, { Dispatch } from 'react';
import {
  createClient
} from '../../services/api';
import {
  BASEURL,
  CATEGORIES_LIST,
  DRINKS_BY_CATEGORY,
  DRINKS_BY_ID
} from '../../services/api/config';
import {
  IAction
} from '../../models/drinks';
import {
  saveCategoriesAction,
  setSelectedCategoryAction,
  saveDrinksAction,
  handleErrorAction,
  saveDrinkIdAction,
  saveDrinkInformationAction
} from '../../hooks/reducer/actions/drinks';

const API = createClient(BASEURL);

const handleError = (dispatch: Dispatch<IAction>) =>
  dispatch(handleErrorAction());

export const fetchCategories = (dispatch: Dispatch<IAction>) => async () => {
  try {
    return await (await (await API(CATEGORIES_LIST)).get()).drinks;
  } catch (e) {
    handleError(dispatch);
    console.log(e);
  }
}

export const saveCategories = (dispatch: Dispatch<IAction>) => async (categories: []) =>
  dispatch(saveCategoriesAction(await categories));

export const setSelectedCategory = (dispatch: Dispatch<IAction>, category: string) =>
  dispatch(setSelectedCategoryAction(category));

export const searchByCategory = (dispatch: Dispatch<IAction>) => async (category: string) => {
  try {
    return await (await API(`${DRINKS_BY_CATEGORY}${category}`).get()).drinks;
  } catch (e) {
    handleError(dispatch);
    console.log(e);
  }
}

export const saveDrinksByCategory = (dispatch: React.Dispatch<IAction>) => async (drinks: []) =>
  dispatch(saveDrinksAction(await drinks));

export const saveDrinkID = (dispatch: Dispatch<IAction>) => (drinkId: number) => {
  dispatch(saveDrinkIdAction(drinkId));
  return true;
}

export const searchDrinkInfo = (dispatch: Dispatch<IAction>) => async (drinkId: number | null) => {
  if (!drinkId) return;
  try {
    return await (await API(`${DRINKS_BY_ID}${drinkId}`).get()).drinks[0];
  } catch (e) {
    handleError(dispatch);
    console.log(e);
  }
}

export const saveDrinkInfo = (dispatch: Dispatch<IAction>) => async (drinkInfo: Object | null) =>
  dispatch(saveDrinkInformationAction(await drinkInfo));