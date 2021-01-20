import React from 'react';
import { Header, Hero, Form } from '../Drinks';
import { Wrapper } from '../ui';
import './layout.component.scss';

interface Props {

}

const Layout: React.FC<Props> = () => {
  return (  
    <>
      <Header 
        title='DrinksPlace'
      />
      <Hero />
      <main className="content">
        <Wrapper>
          <Form />
          
        </Wrapper>
      </main>
    </>
  );
}

export default Layout;