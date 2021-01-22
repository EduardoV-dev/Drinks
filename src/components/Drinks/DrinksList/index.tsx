import React, { useContext, useEffect } from 'react';
import Drink from '../Drink';
import Error from '../Error';
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

  return (
    <Grid container drinksList sm_gap='sm'>
      { drinks.length === 0 ? null : (
        drinks.map((drink: IDrink) => (
          <Grid item xs={12} sm={6} lg={4}>
            <Drink
              key={drink.idDrink}
              drink={drink}
            />
          </Grid>
        ))
      )}
      {/* <Error /> */}
    </Grid>
  );
}

export default DrinksList;