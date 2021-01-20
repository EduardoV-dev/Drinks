import React from 'react';
import './span.component.scss';

interface Props {
  children: string
}

const Span: React.FC<Props> = (props) => {
  return (
    <span className="highlight" {...props} />
  );
}

export default Span;