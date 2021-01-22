import {
  IState,
  IAction
} from '../../../models/drinks';
import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SAVE_DRINKS
} from '../types/drinks';

const drinksReducer = (state: IState, action: IAction): IState => {
  switch(action.type) {
    case SAVE_CATEGORIES: 
      return {
        ...state,
        categories: action.payload
      }
    case SET_SELECTED_CATEGORY: 
      return {
        ...state,
        selectedCategory: action.payload
      }
    case SAVE_DRINKS: 
      return {
        ...state,
        drinks: action.payload
      }
    default: 
      return state;
  }
}

export default drinksReducer;