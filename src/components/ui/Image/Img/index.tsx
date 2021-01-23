import React from 'react';
import styles from './img.module.scss';
import cn from 'classnames';

interface Props {
  src: string;
  alt?: string;
  error?: boolean;
  drink?: boolean;
  modal?: boolean;
}

const Img: React.FC<Props> = ({
  src,
  alt,
  error,
  drink,
  modal
}) => {
  const classNames = cn(styles.img, {
    [styles.img_error]: error,
    [styles.img_drink]: drink,
    [styles.img_modal]: modal
  });

  return (  
    <img
      className={classNames}
      src={src}
      alt={alt}
    />
  );
}

export default Img;