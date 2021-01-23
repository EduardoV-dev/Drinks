export interface IState {
  categories: [];
  selectedCategory: string;
  drinks: [];
  error: boolean
  drinkId: number | null;
  drinkInfo: [] | null;
  modalState: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IDrink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
}