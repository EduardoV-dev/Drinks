import React from 'react';
import styles from './label.module.scss';

interface Props {
  children: string
}

const Label: React.FC<Props> = (props) => {
  return (  
    <label className={styles.label} {...props} />
  );
}

export default Label;