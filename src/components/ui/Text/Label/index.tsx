import React from 'react';
import './label.component.scss';

interface Props {
  children: string
}

const Label: React.FC<Props> = (props) => {
  return (  
    <label className="label" {...props} />
  );
}

export default Label;