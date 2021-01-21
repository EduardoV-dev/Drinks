import React from 'react';
import styles from './img.module.scss';
import cn from 'classnames';

interface Props {
  src: string;
  alt?: string;
  error?: boolean;
}

const Img: React.FC<Props> = ({
  src,
  alt,
  error
}) => {
  const classNames = cn(styles.img, {
    [styles.img_error]: error
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