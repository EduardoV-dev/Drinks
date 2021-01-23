import React, { useEffect, useState } from 'react';
import { Li, Span } from '../../../ui';
import { getIngredients } from '../../../../utils/modal';

interface Props {
  drinkInfo: Object
}

const ModalIngredient: React.FC<Props> = ({
  drinkInfo
}) => {
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  useEffect(() => setIngredients(getIngredients(drinkInfo)), [drinkInfo]);

  return (
    <ul>
      {ingredients.length === 0 ? null : (
        ingredients.map((ingredient: string) => (
          <Li key={ingredient}>
            <Span modal_ingredient>{ingredient}</Span>
          </Li>
        ))
      )}
    </ul>
  );
}

export default ModalIngredient;