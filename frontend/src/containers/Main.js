import React, { Component } from 'react';
import {
  Box,
  Heading,
  Image,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';
import BgCircle from '../assets/bg-circle.png';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vidname: ''
    }
  }
  componentDidMount() {
    this.setVideo()
  }
  setVideo() {
    let vidno = Math.floor(Math.random() * 5) + 1
    let setvidname = "/videos/bigvideo" + vidno + ".mp4"
    this.setState({ vidname: setvidname })
  }
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" margin={{ vertical: '0' }} pad={{ vertical: '0' }} background="brand">
              <Stack anchor="center" margin={{ vertical: '0' }} pad={{ vertical: '0' }}>
                <video autoPlay loop muted playsInline width="100%" margin={{ vertical: '0' }} pad={{ vertical: '0' }} src={process.env.PUBLIC_URL + this.state.vidname} />
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
}

export default Main;