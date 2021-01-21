import React from 'react';
import styles from './select.module.scss';

interface Props {

}

const Select: React.FC<Props> = () => {
  return (
    <div className={styles.select_container}>
      <select className={styles.select}>
        <option value="">Select a category</option>
      </select>
    </div>
  );
}

export default Select;