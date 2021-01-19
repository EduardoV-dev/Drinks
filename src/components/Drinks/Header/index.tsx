import React from 'react';
import { Wrapper } from '../../ui';
import logo from '../../../assets/svg/logo.svg';
import './header.component.scss';

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <Wrapper>
        <a href="#!" className="header__link">
          <h1 className="header__title" >{title}</h1>
          <img
            src={logo}
            alt=""
          />
        </a>
      </Wrapper>
    </header>
  );
}

export default Header;