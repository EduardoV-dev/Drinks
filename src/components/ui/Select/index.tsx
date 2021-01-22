import React, { useContext, useEffect } from 'react';
import styles from './select.module.scss';
import { drinksContext } from '../../../hooks/context/drinks';

interface Props {

}

interface ICategory {
  strCategory: string;
}

const Select: React.FC<Props> = () => {
  const {
    categories,
    handleCategories,
    handleSelectCategory
  } = useContext(drinksContext);

  // eslint-disable-next-line
  useEffect(() => handleCategories(), []);

  return (
    <div className={styles.select_container}>
      <select className={styles.select}
        onChange={handleSelectCategory}
      >
        {categories.length === 0
          ? (<option value="">Loading...</option>)
          : categories.map((category: ICategory) => (
            <option
              value={category.strCategory}
              key={category.strCategory}
            >
              {category.strCategory}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;