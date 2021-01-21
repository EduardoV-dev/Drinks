import React from 'react';
import { Wrapper, Span } from '../../ui';
import styles from './hero.module.scss';

interface Props {
  
}

const Hero: React.FC<Props> = () => {
  return (
    <section className={styles.hero}>
      <Wrapper hero>
        <h2 className={styles.hero_headline}>
          Search for the <Span>Best Recipes</Span> by just filtering them by the <Span>Category</Span> they belong.
        </h2>
      </Wrapper>
    </section>
  );
}

export default Hero;