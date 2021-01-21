import React from 'react';
import { Wrapper } from '../../ui';
import logo from '../../../assets/svg/logo.svg';
import styles from './header.module.scss';

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <Wrapper header>
        <a href="#!" className={styles.header_link}>
          <h1 className={styles.header_title} >{title}</h1>
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