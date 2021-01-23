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
    error,
    handleDrinksByCategory
  } = useContext(drinksContext);
  // eslint-disable-next-line
  useEffect(() => handleDrinksByCategory(selectedCategory), [selectedCategory]);
  
  if (error) return <Error />;

  return (
    <Grid container drinksList sm_gap='sm'>
      { drinks.length === 0 ? null : (
        drinks.map((drink: IDrink) => (
          <Grid item xs={12} sm={6} lg={4}
            key={drink.idDrink}
          >
            <Drink
              drink={drink}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default DrinksList;