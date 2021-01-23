import React from 'react';
import styles from './li.module.scss';

interface Props {
  children: string | JSX.Element
}

const Li: React.FC<Props> = ({
  children
}) => {
  return (  
    <li className={styles.li}>
      {children}
    </li>
  );
}

export default Li;