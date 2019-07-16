import React from 'react';
import {
  Box,
  Image,
  ResponsiveContext
} from 'grommet';
import MainPhoto from '../assets/main_photo.jpg';

function Main() {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="row" align="center" justify="center">
          <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
            <Image src={MainPhoto} width='80%' />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Main;