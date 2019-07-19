import React from 'react';
import {
  Box,
  Heading,
  Image,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';
import MainPhoto from '../assets/main_photo.jpg';
import BgCircle from '../assets/bg-circle.png';

function Main() {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="row" align="center" justify="center">
          <Box flex align="center" justify="center" margin={{ vertical: '0' }} color="#000000">
            <Stack anchor="center" margin={{ vertical: '0' }}>
              <Image src={MainPhoto} width="100%" fit="cover" margin={{ top: 'small', bottom: 'xsmall' }} />
              <Image src={BgCircle} width="100%" fit="cover" />
              <Box align="start" justify="evenly" width="100%">
                <Heading level="1" color="#000000">URCoach</Heading>
                <Text color="#000000">체계적으로 운동을 기록하세요.</Text>
                <Heading level="1" color="#000000">START!</Heading>
              </Box>
            </Stack>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Main;