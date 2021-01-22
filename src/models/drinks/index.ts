export interface IState {
  categories: [];
  selectedCategory: string;
  drinks: [];
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