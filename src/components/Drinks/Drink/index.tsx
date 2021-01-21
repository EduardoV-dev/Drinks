import React from 'react';
import placeholder from '../../../assets/svg/placeholder.jpg';
import styles from './drink.module.scss';

interface Props {

}

const Drink: React.FC<Props> = () => {
  return (
    <section className={styles.drink}>
      <figure className={styles.drink_figure}>
        <img
          src={placeholder}
          alt="Imagen"
          className={styles.drink_img}
        />
      </figure>
      <div className={styles.drink_overlay}>
        <p className={styles.drink_name}>
          Margarita
        </p>
      </div>
    </section>
  );
}

export default Drink;