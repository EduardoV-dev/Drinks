import React from 'react';
import { Header, Hero, Form, DrinksList, DrinkStatus } from '../Drinks';
import { Wrapper, Grid } from '../ui';
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
          <Grid container gap='lg'>
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
    </>
  );
}

export default Layout;