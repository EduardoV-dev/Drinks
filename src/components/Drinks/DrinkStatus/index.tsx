import React, { useContext } from 'react';
import { P, Span } from '../../ui';
import { drinksContext } from '../../../hooks/context/drinks';

interface Props {

}

const DrinkStatus: React.FC<Props> = () => {
  const {
    drinks,
    selectedCategory
  } = useContext(drinksContext);

  return (
    <>
      <P>
        Total drinks: <Span>{drinks.length}</Span>
      </P>
      <P
        xs_display='none'
        md_display='block'
      >Category chosen: <Span>{selectedCategory}</Span>
      </P>
    </>
  );
}

export default DrinkStatus;