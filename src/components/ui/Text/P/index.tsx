import React from 'react';
import styles from './p.module.scss';
import cn from 'classnames';

interface Props {
  children: (JSX.Element | string)[];
  xs_display?: 'block' | 'none';
  md_display?: 'block' | 'none';
}

const P: React.FC<Props> = ({
  children,
  xs_display,
  md_display
}) => {
  const classNames = cn(styles.P, {
    [styles[`P_d_${xs_display}`]]: xs_display,
    [styles[`P_d-md_${md_display}`]]: md_display
  })

  return (
    <p className={classNames}>
      {children}
    </p>
  );
}

export default P;