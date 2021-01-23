import React, { useContext } from 'react';
import styles from './drink.module.scss';
import { P, Img } from '../../ui';
import { IDrink } from '../../../models/drinks';
import { drinksContext } from '../../../hooks/context/drinks';

interface Props {
  drink: IDrink;
}

const Drink: React.FC<Props> = ({
  drink
}) => {
  const { handleDrinkId } = useContext(drinksContext);
  const { idDrink, strDrink, strDrinkThumb } = drink;

  return (
    <section className={styles.drink}
      onClick={() => handleDrinkId(idDrink)}
    >
      <figure className={styles.drink_figure}>
        <Img
          src={strDrinkThumb}
          alt=""
          drink
        />
      </figure>
      <div className={styles.drink_overlay}>
        <P light>
          {strDrink}
        </P>
      </div>
    </section>
  );
}

export default Drink;