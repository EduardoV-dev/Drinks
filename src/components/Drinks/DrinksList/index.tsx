import React from 'react';
import Drink from '../Drink';
import { Wrapper } from '../../ui';

interface Props {

}

const DrinksList: React.FC<Props> = () => {
  return (
    <>
      <Wrapper drinksList>
        <Drink />
        <Drink />
        <Drink />
        <Drink />
        <Drink />
        <Drink />
        <Drink />
      </Wrapper>
    </>
  );
}

export default DrinksList;