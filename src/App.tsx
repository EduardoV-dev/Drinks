import React from 'react';
import Layout from './components/layout';
import DrinksProvider from './hooks/context/drinks';

function App(): JSX.Element {
  return (
    <DrinksProvider>
      <Layout />
    </DrinksProvider>
  );
}

export default App;