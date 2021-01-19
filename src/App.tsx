import React from 'react';
import { Header, Hero } from './components/Drinks';

function App(): JSX.Element {
  return (
    <>
      <Header 
        title='DrinksPlace'
      />
      <Hero />
    </>
  );
}

export default App;