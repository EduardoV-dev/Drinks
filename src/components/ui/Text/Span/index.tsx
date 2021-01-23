import React from 'react';
import styles from './span.module.scss';
import cn from 'classnames';

interface Props {
  children: string;
  modal?: boolean;
  modal_ingredient?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Span: React.FC<Props> = ({
  children,
  modal,
  modal_ingredient,
  onClick
}) => {
  const classNames = cn(styles.highlight, {
    [styles.highlight_modal]: modal,
    [styles.highlight_modal_ingredient]: modal_ingredient
  })

  return (
    <span className={classNames} onClick={onClick}>
      {children}
    </span>
  );
}

export default Span;