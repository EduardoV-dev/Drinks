import React from 'react';
import styles from './grid.module.scss';
import cn from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gap = 'sm' | 'md' | 'lg';

interface Props {
  children: JSX.Element | JSX.Element[];
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  gap?: Gap
}

const Grid: React.FC<Props> = ({
  children,
  container, 
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  gap
}) => {
  console.log(gap);
  const classNames = cn({
    [styles.grid_container]: container,
    [styles.grid_item]: item,
    [styles[`grid_xs_${xs}`]]: xs,
    [styles[`grid_sm_${sm}`]]: sm,
    [styles[`grid_md_${md}`]]: md,
    [styles[`grid_lg_${lg}`]]: lg,
    [styles[`grid_xl_${xl}`]]: xl,
    [styles[`grid_gap_${gap}`]]: gap
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Grid;