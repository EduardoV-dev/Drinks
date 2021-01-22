import React from 'react';
import styles from './grid.module.scss';
import cn from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gap = 'sm' | 'md' | 'lg' | 'no-left' | 'no-right';

interface Props {
  children: JSX.Element | JSX.Element[];
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  sm_gap?: Gap;
  lg_gap?: Gap;
  drinksList?: boolean;
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
  sm_gap,
  lg_gap,
  drinksList
}) => {
  const classNames = cn({
    [styles.grid_container]: container,
    [styles.grid_item]: item,
    [styles[`grid_xs_${xs}`]]: xs,
    [styles[`grid_sm_${sm}`]]: sm,
    [styles[`grid_md_${md}`]]: md,
    [styles[`grid_lg_${lg}`]]: lg,
    [styles[`grid_xl_${xl}`]]: xl,
    [styles[`grid_sm_gap_${sm_gap}`]]: sm_gap,
    [styles[`grid_lg_gap_${lg_gap}`]]: lg_gap,
    [styles.grid_drinksList]: drinksList
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Grid;