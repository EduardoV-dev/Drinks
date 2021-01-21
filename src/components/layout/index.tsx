import React from 'react';
import { Header, Form, DrinksList, DrinkStatus, ScrollToTop } from '../Drinks';
import { Wrapper, Grid, Hero } from '../ui';
import styles from './layout.module.scss';

interface Props {
  
}

const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header
        title='DrinksPlace'
      />
      <Hero />
      <main className={styles.content}>
        <Wrapper>
          <Grid container lg_gap='lg'>
            <Grid item xs={12} lg={6}>
              <Form />
              <DrinkStatus />
            </Grid>
            <Grid item xs={12} lg={6}>
              <DrinksList />
            </Grid>
          </Grid>
        </Wrapper>
      </main>
      <ScrollToTop />
    </>
  );
}

export default Layout;