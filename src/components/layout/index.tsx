import React, { useContext, useEffect } from 'react';
import { Header, Form, DrinksList, DrinkStatus, Modal } from '../Drinks';
import { Wrapper, Grid, Hero, ScrollToTop } from '../ui';
import { drinksContext } from '../../hooks/context/drinks';
import styles from './layout.module.scss';

interface Props {

}

const Layout: React.FC<Props> = () => {
  const {
    drinkId,
    handleSearchDrinkInfo,
    modalState
  } = useContext(drinksContext);
  // eslint-disable-next-line
  useEffect(() => handleSearchDrinkInfo(drinkId), [drinkId]);

  const modalComponent = modalState ? <Modal /> : null;

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
      {modalComponent}
    </>
  );
}

export default Layout;