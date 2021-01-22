import React from 'react';
import placeholder from '../../../assets/svg/placeholder.jpg';
import styles from './drink.module.scss';
import { P } from '../../ui';
import {
  IDrink
} from '../../../models/drinks';

interface Props {
  drink: IDrink;
}

const Drink: React.FC<Props> = ({
  drink
}) => {
  const { strDrink, strDrinkThumb } = drink;

  return (
    <section className={styles.drink}>
      <figure className={styles.drink_figure}>
        <img
          src={strDrinkThumb}
          alt=""
          className={styles.drink_img}
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