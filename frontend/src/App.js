import React, { Component } from 'react';
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet, 
  Layer, 
  ResponsiveContext, 
  Text
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import logo from './assets/logo.png';

const theme = {
  global: {
    colors: {
      brand: '#504c50'
    },
    font: {
      family: 'Roboto, Noto Sans KR',
      size: '14px',
      height: '20px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme = { theme }>
        <Box>
              <AppBar>
                <Heading level='3' margin='none'><img src={logo} alt="URCoach" style={{height: 30}} /></Heading>
                <Button onClick={() => this.setState({ showSidebar: !showSidebar })}>
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>챌린지</Text>
                  </Box>
                </Button>
                <Button hoverIndicator="dark-1" onClick={() => {}}>
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>분석</Text>
                  </Box>
                </Button>
                <Button hoverIndicator="dark-1" onClick={() => {}}>
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>매칭</Text>
                  </Box>
                </Button>
                <Button hoverIndicator="dark-1" onClick={() => {}}>
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>채팅</Text>
                  </Box>
                </Button>
                <Button hoverIndicator="dark-1" onClick={() => {}}>
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>커뮤니티</Text>
                  </Box>
                </Button>
                <Box direction="row" align="center" gap="small" pad="xsmall">
                  <Button primary color="#7bb73d" label="로그인" onClick={() => {}} />
                  <Button primary color="#fe7f2d" label="회원가입" onClick={() => {}} />
                </Box>
              </AppBar>
              <Collapsible open={showSidebar}>
                    <Layer margin={{ top: "large" }} full>
                        <Box
                          background='brand'
                          tag='header'
                          justify='end'
                          align='center'
                          direction='row'
                        >
                          <Button
                            icon={<FormClose />}
                            onClick={() => this.setState({ showSidebar: false })}
                          />
                        </Box>
                        <Box
                          fill
                          background='brand'
                          align='center'
                          justify='center'
                        >
                          사이드bar
                        </Box>
                      </Layer>
                  </Collapsible>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  App 바디
                </Box>
              </Box>
            </Box>
      </Grommet>
    );
  }
}

export default App;
