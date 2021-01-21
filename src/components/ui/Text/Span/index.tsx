import React from 'react';
import styles from './span.module.scss';

interface Props {
  children: string
}

const Span: React.FC<Props> = (props) => {
  return (
    <span className={styles.highlight} {...props} />
  );
}

export default Span;