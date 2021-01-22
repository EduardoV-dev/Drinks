import React, { useState } from 'react';
import {
  handleControlVisibility,
  handleScroll
} from '../../../utils/scrollToTop';
import styles from './scrollToTop.module.scss';
import icon from '../../../assets/svg/scrollTop.svg';
import cn from 'classnames';

interface Props {

}

const ScrollToTop: React.FC<Props> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  window.addEventListener('scroll', () =>
    handleControlVisibility(setVisible));

  const classNames = cn(styles.scroll, {
    [styles.scroll_show]: visible
  });


  return (
    <div
      className={classNames}
      onClick={handleScroll}
    >
      <img
        src={icon}
        alt='Scroll To Top'
      />
    </div>
  );
}

export default ScrollToTop;