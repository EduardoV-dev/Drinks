import React from 'react';
import { Wrapper } from '../../ui';
import './hero.component.scss';

interface Props {

}

const Hero: React.FC<Props> = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__wrapper">
        <h2 className="hero__headline">
          Search for the Best Recipes by just filtering the recipes by the Category they belong.
        </h2>
      </Wrapper>
    </section>
  );
}

export default Hero;