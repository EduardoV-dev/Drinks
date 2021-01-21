import React from 'react';
import styles from './wrapper.module.scss';
import cn from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
  hero?: boolean;
  header?: boolean;
  drinksList?: boolean;
}

const Wrapper: React.FC<Props> = ({ 
  children,
  hero,
  header,
  drinksList
}) => {
  const classNames = cn(styles.wrapper_wrap, {
    [styles.wrapper_hero]: hero,
    [styles.wrapper_header]: header,
    [styles.wrapper_drinksList]: drinksList
  });

  return (
    <div
      className={classNames}
    >{children}
    </div>
  );
}

export default Wrapper;