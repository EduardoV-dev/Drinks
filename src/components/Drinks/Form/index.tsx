import React from 'react';
import { Select, Label } from '../../ui';
import './form.component.scss';

interface Props {

}

const Form: React.FC<Props> = () => {
  return (
    <form className="form">
      <Label>
        Select the category of your choice
      </Label>
      <Select />
    </form>
  );
}

export default Form;