import React from 'react';
import {
  createClient
} from '../../services/api';
import {
  BASEURL,
  CATEGORIES_LIST,
  DRINKS_BY_CATEGORY
} from '../../services/api/config';
import {
  IAction
} from '../../models/drinks';
import {
  saveCategoriesAction,
  setSelectedCategoryAction,
  saveDrinksAction
} from '../../hooks/reducer/actions/drinks';

const API = createClient(BASEURL);

export const fetchCategories = async () => {
  try {
    return await (await (await API(CATEGORIES_LIST)).get()).drinks;
  } catch (e) {
    console.log(e);
  }
}

export const saveCategories = (dispatch: React.Dispatch<IAction>) => async (categories: []) =>
  dispatch(saveCategoriesAction(await categories));

export const setSelectedCategory = (dispatch: React.Dispatch<IAction>, category: string) =>
  dispatch(setSelectedCategoryAction(category));

export const searchByCategory = async (category: string) => {
  try {
    return await (await API(`${DRINKS_BY_CATEGORY}${category}`).get()).drinks;
  } catch (e) {
    console.log(e);
  }
}

export const saveDrinksByCategory = (dispatch: React.Dispatch<IAction>) => async (drinks: []) => 
  dispatch(saveDrinksAction(await drinks));
  