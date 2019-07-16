import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Image,
  Layer,
  Menu,
  ResponsiveContext,
  Text
} from 'grommet';
import { FormClose, Menu as MenuIcon } from 'grommet-icons';
import logo from '../assets/logo.png';
import Main from '../components/Main';

const HeadBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const MenuA = (props) => {
  return(
    <a 
      style={{ all: "inherit" }}
      {...props}
    />
  );
}

class NavBar extends Component {
  state = {
    showMenu: false,
  }

  render() {
    const { showMenu } = this.state;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <BRouter>
          <HeadBar>
            <a href="/">
              <Image src={logo} alt="URCoach" style={{ height: 30 }} />
            </a>
              {(size !== 'small') ? (
                <Box fill="horizontal" justify="evenly" direction="row">
                  <Box pad="xsmall" direction="row" align="center">
                    <Menu pad="xsmall" gap="small" plain items={[
                      { label: "챌린지 목록", href: "#" },
                      { label: "내 챌린지", href: "#" }
                    ]}>
                      {({ drop, hover }) => {
                        const color = hover && !drop ? "#00efd1" : undefined;
                        return (
                          <Box direction="row" gap="small" pad={{ horizontal: "large", vertical: "small" }}>
                            <Text color={color} size="large">챌린지</Text>
                          </Box>
                        )
                      }}
                    </Menu>
                  </Box>
                  <Box pad="xsmall" direction="row" align="center">
                    <Menu pad="xsmall" gap="small" plain items={[
                      { label: "데일리 리포트", href: "#" },
                      { label: "운동 다이어리", href: "#" }
                    ]}>
                      {({ drop, hover }) => {
                        const color = hover && !drop ? "#00efd1" : undefined;
                        return (
                          <Box direction="row" gap="small" pad={{ horizontal: "large", vertical: "small" }}>
                            <Text color={color} size="large">분석</Text>
                          </Box>
                        )
                      }}
                    </Menu>
                  </Box>
                  <Box pad="xsmall" direction="row" align="center">
                    <Menu pad="xsmall" gap="small" plain items={[
                      { label: "코치 추천", href: "#" },
                      { label: "휘트니스 추천", href: "#" }
                    ]}>
                      {({ drop, hover }) => {
                        const color = hover && !drop ? "#00efd1" : undefined;
                        return (
                          <Box direction="row" gap="small" pad={{ horizontal: "large", vertical: "small" }}>
                            <Text color={color} size="large">매칭</Text>
                          </Box>
                        )
                      }}
                    </Menu>
                  </Box>
                  <Box direction="row" align="center" gap="small" pad="xsmall">
                    <Button primary color="#00acea" label="로그인" onClick={() => { }} />
                    <Button primary color="#fedb41" label="회원가입" onClick={() => { }} />
                  </Box>
                </Box>
              ) : (
                  <Box align="end" gap="xsmall" pad="xsmall">
                    <Button icon={<MenuIcon />} onClick={() => this.setState(prevState => ({ showMenu: !prevState.showMenu }))} />
                    {showMenu && (
                      <Layer full>
                        <Box background="brand" tag="header" justify="end" align="center" direction="row" >
                          <Button icon={<FormClose />} onClick={() => this.setState({ showMenu: false })} />
                        </Box>
                        <Box fill background="brand" align="center" justify="center">
                          <Box direction="column" pad="large">
                            <a href="/">
                              <Image src={logo} alt="URCoach" style={{ height: 50 }} pad={{ vertical: "large" }} />
                            </a>
                            <Box direction="row" justify="center" gap="large" pad={{ vertical: "large" }}>
                              <Button primary color="#00acea" label="로그인" onClick={() => { }} />
                              <Button primary color="#fedb41" label="회원가입" onClick={() => { }} />
                            </Box>
                            <Box tag="ul" justify="start" alignContent="start" alignSelf="start" direction="column">
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Heading level="4" size="small">
                                  챌린지
                                        </Heading>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">챌린지 목록</MenuA></Text>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">내 챌린지</MenuA></Text>
                              </Box>
                            </Box>
                            <Box tag="ul" justify="start" alignContent="start" alignSelf="start" direction="column">
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Heading level="4" size="small">
                                  분석
                                        </Heading>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">데일리 리포트</MenuA></Text>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">운동 다이어리</MenuA></Text>
                              </Box>
                            </Box>
                            <Box tag="ul" justify="start" alignContent="start" alignSelf="start" direction="column">
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Heading level="4" size="small">
                                  매칭
                                        </Heading>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">코치 추천</MenuA></Text>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="#">휘트니스 추천</MenuA></Text>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Layer>
                    )}
                  </Box>
                )}
          </HeadBar>
          <Route path="/" exact component={ Main } />
          </BRouter>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default NavBar;