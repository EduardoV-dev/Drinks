import React from 'react';
import { P, Span } from '../../ui';

interface Props {

}

const DrinkStatus: React.FC<Props> = () => {
  return (
    <>
      <P>
        Total drinks: <Span>125</Span>
      </P>
      <P
        xs_display='none'
        md_display='block'
      >Category chosen: <Span>Milk</Span>
      </P>
    </>
  );
}

export default DrinkStatus;