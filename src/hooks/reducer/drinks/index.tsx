import {
  IState,
  IAction
} from '../../../models/drinks';
import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SAVE_DRINKS,
  ERROR,
  SET_DRINK_ID,
  SAVE_DRINK_INFO,
  DISPLAY_MODAL
} from '../types/drinks';

const drinksReducer = (state: IState, action: IAction): IState => {
  switch(action.type) {
    case SAVE_CATEGORIES: 
      return {
        ...state,
        categories: action.payload,
        error: false
      }
    case SET_SELECTED_CATEGORY: 
      return {
        ...state,
        selectedCategory: action.payload
      }
    case SAVE_DRINKS: 
      return {
        ...state,
        drinks: action.payload,
        error: false
      }
    case ERROR: 
      return {
        ...state,
        error: true
      }
    case SET_DRINK_ID:
      return {
        ...state,
        drinkId: action.payload
      }
    case SAVE_DRINK_INFO:
      return {
        ...state,
        drinkInfo: action.payload,
        error: false
      }
    case DISPLAY_MODAL: 
      return {
        ...state,
        modalState: action.payload
      }
    default: 
      return state;
  }
}

export default drinksReducer;