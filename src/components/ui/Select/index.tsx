import React from 'react';
import './select.component.scss';

interface Props {

}

const Select: React.FC<Props> = () => {
  return (
    <div className="select-container">
      <select className="select">
        <option value="">Select a category</option>
      </select>
    </div>
  );
}

export default Select;