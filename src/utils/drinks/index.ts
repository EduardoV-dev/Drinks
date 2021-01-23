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
  saveDrinkIdAction,
  saveDrinkInformationAction
} from '../../hooks/reducer/actions/drinks';

const API = createClient(BASEURL);

export const fetchCategories = async () =>
  await (await API(CATEGORIES_LIST).get()).drinks;

export const saveCategories = (dispatch: Dispatch<IAction>) => async (categories: []) =>
  dispatch(saveCategoriesAction(await categories));

export const setSelectedCategory = (dispatch: Dispatch<IAction>, category: string) =>
  dispatch(setSelectedCategoryAction(category));

export const searchByCategory = async (category: string) =>
  await (await API(`${DRINKS_BY_CATEGORY}${category}`).get()).drinks;

export const saveDrinksByCategory = (dispatch: React.Dispatch<IAction>) => async (drinks: []) =>
  dispatch(saveDrinksAction(await drinks));

export const saveDrinkID = (dispatch: Dispatch<IAction>) => (drinkId: number) => {
  dispatch(saveDrinkIdAction(drinkId));
  return true;
}

export const searchDrinkInfo = async (drinkId: number | null) => {
  if (!drinkId) return;
  return await (await API(`${DRINKS_BY_ID}${drinkId}`).get()).drinks[0];
}

export const saveDrinkInfo = (dispatch: Dispatch<IAction>) => async (drinkInfo: Object | null) =>
  dispatch(saveDrinkInformationAction(await drinkInfo));