import React from 'react';
import { IAction } from "../../models/drinks";
import { displayModalAction } from '../../hooks/reducer/actions/drinks';

export const setOverflow = (modalState: boolean) => {
  if (modalState) {
    document.getElementsByTagName('body')[0].style.height = '100vh';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('body')[0].style.height = 'auto';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
}

export const showModal = (dispatch: React.Dispatch<IAction>) => async (value: boolean) => {
  dispatch(displayModalAction(await value));
  setOverflow(await value);
}

export const getIngredients = (drinkInfo: any): string[] => {
  const ingredients: string[] = [];

  for(let i: number = 1; i <= 15; i++) {
    if (drinkInfo[`strIngredient${i}`]) {
      ingredients.push(`${drinkInfo[`strIngredient${i}`]} · ${drinkInfo[`strMeasure${i}`]}`);
    }
  }

  return ingredients;
}