import React from 'react';
import { Wrapper, Span } from '../../ui';
import './hero.component.scss';

interface Props {

}

const Hero: React.FC<Props> = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__wrapper">
        <h2 className="hero__headline">
          Search for the <Span>Best Recipes</Span> by just filtering the recipes by the <Span>Category</Span> they belong.
        </h2>
      </Wrapper>
    </section>
  );
}

export default Hero;