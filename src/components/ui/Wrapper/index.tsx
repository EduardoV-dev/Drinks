import React from 'react';
import './wrapper.component.scss';

interface Props {
  children: JSX.Element;
  className?: string;
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`wrapper ${className}`}>
      {children}
    </div>
  );
}

export default Wrapper;