import React from 'react';
import { Select, Label } from '../../ui';
import styles from './form.module.scss';

interface Props {

}

const Form: React.FC<Props> = () => {
  return (
    <form className={styles.form}>
      <Label>
        Select the category of your choice
      </Label>
      <Select />
    </form>
  );
}

export default Form;