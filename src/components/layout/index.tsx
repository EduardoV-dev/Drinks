import React from 'react';
import { Header, Form, DrinksList, DrinkStatus } from '../Drinks';
import { Wrapper, Grid, Hero, ScrollToTop } from '../ui';
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
          <Grid container>
            <Grid item xs={12} lg={5}>
              <Form />
              <DrinkStatus />
            </Grid>
            <Grid item xs={12} lg={5}>
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