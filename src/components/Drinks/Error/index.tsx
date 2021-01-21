import React from 'react';
import error from '../../../assets/svg/error.svg';
import { Grid, Img } from '../../ui';

interface Props {

}

const Error: React.FC<Props> = () => {
  return (
    <Grid item xs={12}>
      <Img
        src={error}
        alt='Se produjo un error'
        error
      />
    </Grid>
  );
}

export default Error;