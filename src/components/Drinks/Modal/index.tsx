import React, { useContext } from 'react';
import { P, Img, Span } from '../../ui';
import { drinksContext } from '../../../hooks/context/drinks';
import styles from './modal.module.scss';

interface Props {

}

const Modal: React.FC<Props> = () => {
  const { drinkInfo, hideModal } = useContext(drinksContext);
  if (!drinkInfo) return null;
  console.log(drinkInfo);

  const { strDrink, strInstructions, strDrinkThumb } = drinkInfo;

  return (
    <>
      <div className={styles.modal_backdrop}
        onClick={hideModal}
      ></div>
      <div className={styles.modal}>
        <section className={styles.modal_heading}>
          <P modal>{strDrink}</P>
          <Span modal 
            onClick={hideModal}
          >&times;</Span>
        </section>
        <section className={styles.modal_body}>
          <Img
            src={strDrinkThumb}
            alt=''
            modal
          />
          <div className={styles.modal_ingredients}>
            <P modal>Ingredients</P>
            <ul>
              <li className={styles.modal_li}>
                <Span modal_ingredient>Tequila · 1 1/2 oz</Span>
              </li>
              <li className={styles.modal_li}>
                <Span modal_ingredient>Tequila · 1 1/2 oz</Span>
              </li>
              <li className={styles.modal_li}>
                <Span modal_ingredient>Tequila · 1 1/2 oz</Span>
              </li>
              <li className={styles.modal_li}>
                <Span modal_ingredient>Tequila · 1 1/2 oz</Span>
              </li>
              <li className={styles.modal_li}>
                <Span modal_ingredient>Tequila · 1 1/2 oz</Span>
              </li>
            </ul>
          </div>
          <div className={styles.modal_instructions}>
            <P modal>Instructions</P>
            <P modal modal_instructions>
              {strInstructions}
          </P>
          </div>
        </section>
      </div>
    </>
  );
}

export default Modal;