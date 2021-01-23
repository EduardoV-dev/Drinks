import React, { useContext, useEffect } from 'react';
import Drink from '../Drink';
import { Grid } from '../../ui';
import {
  drinksContext
} from '../../../hooks/context/drinks';
import {
  IDrink
} from '../../../models/drinks';

interface Props {

}

const DrinksList: React.FC<Props> = () => {
  const {
    selectedCategory,
    drinks,
    handleDrinksByCategory
  } = useContext(drinksContext);
  // eslint-disable-next-line
  useEffect(() => handleDrinksByCategory(selectedCategory), [selectedCategory]);

  if (drinks.length === 0) return null;

  return (
    <Grid container drinksList sm_gap='sm'>
      {drinks.map((drink: IDrink) => (
        <Grid item xs={12} sm={6} lg={4}
          key={drink.idDrink}
        >
          <Drink
            drink={drink}
          />
        </Grid>
      ))
      }
    </Grid>
  );
}

export default DrinksList;