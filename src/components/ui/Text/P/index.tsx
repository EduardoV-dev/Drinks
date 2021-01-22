import React from 'react';
import styles from './p.module.scss';
import cn from 'classnames';

interface Props {
  children: (JSX.Element | string)[] | string;
  xs_display?: 'block' | 'none';
  md_display?: 'block' | 'none';
  light?: boolean
}

const P: React.FC<Props> = ({
  children,
  xs_display,
  md_display,
  light
}) => {
  const classNames = cn(styles.P, {
    [styles[`P_d_${xs_display}`]]: xs_display,
    [styles[`P_d-md_${md_display}`]]: md_display,
    [styles.P_light]: light
  })

  return (
    <p className={classNames}>
      {children}
    </p>
  );
}

export default P;