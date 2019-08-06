import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route} from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Layer,
  Menu,
  ResponsiveContext,
  Text
} from 'grommet';
import { FormClose, Menu as MenuIcon } from 'grommet-icons';
import logo from '../assets/logo.png';
import Main from '../containers/Main';
import SignUp from './SignUp';
import Login from './Login';
import ChallengeList from './ChallengeList';
import DiaryNew from './DiaryNew';
import DiaryList from './DiaryList';
import DiaryRead from './DiaryRead';
import DiaryEdit from './DiaryEdit';
import MyExerciseList from './MyExerciseList';
import MyExerciseRead from './MyExerciseRead';
import ReportMain from './ReportMain';
import ReportExercise from './ReportExercise';
import ReportFood from './ReportFood';

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
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a 
      style={{ all: "inherit" }}
      {...props}
    />
  );
}

class NavBar extends Component {
  state = {
    showMenu: false,
    imageIsReady: false
  }

  componentDidMount() {
    const img  = new Image();
    img.src = logo;

    img.onload = () => {
      this.setState({ imageIsReady: true });
    }
  }

  shouldComponentUpdate(nextState) {
    if (this.state.showMenu === nextState.showMenu) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { showMenu } = this.state;
    const { imageIsReady }  = this.state;
    if (!imageIsReady) {
      return null;
    } else {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <BRouter>
          <HeadBar>
            <a href="/">
              <img src={logo} alt="URCoach" style={{ height: 30 }} />
            </a>
              {(size !== 'small') ? (
                <Box fill="horizontal" justify="evenly" direction="row">
                  <Box pad="xsmall" direction="row" align="center">
                    <Menu pad="xsmall" gap="small" plain items={[
                      { label: "챌린지 목록", href: "/ChallengeList" },
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
                      { label: "데일리 리포트", href: "/report/main" },
                      { label: "운동 다이어리", href: "/diary/list" }
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
                    <Button primary color="dark-2" label="로그인" href="/login"/>
                    <Button primary color="light-2" label="회원가입" href="/signup" />
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
                              <img src={logo} alt="URCoach" style={{ height: 50 }} pad={{ vertical: "large" }} />
                            </a>
                            <Box direction="row" justify="center" gap="large" pad={{ vertical: "large" }}>
                              <Button primary color="dark-2" label="로그인" href="/login" />
                              <Button primary color="light-2" label="회원가입" href="/signup"/>
                            </Box>
                            <Box tag="ul" justify="start" alignContent="start" alignSelf="start" direction="column">
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Heading level="4" size="small">
                                  챌린지
                                </Heading>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="/ChallengeList">챌린지 목록</MenuA></Text>
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
                                <Text><MenuA href="/report/main">데일리 리포트</MenuA></Text>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="/diary/list">운동 다이어리</MenuA></Text>
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
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/challengelist" exact component={ChallengeList} />
          <Route path="/diary/new" exact component={DiaryNew} />
          <Route path="/diary/new/:date" exact component={DiaryNew} />
          <Route path="/diary/list" exact component={DiaryList} />
          <Route path="/diary/read" exact component={DiaryRead} />
          <Route path="/diary/read/:date" exact component={DiaryRead} />
          <Route path="/diary/edit" exact component={DiaryEdit} />
          <Route path="/diary/edit/:date" exact component={DiaryEdit} />
          <Route path="/myexercise/list" exact component={MyExerciseList} />
          <Route path="/myexercise/read" exact component={MyExerciseRead} />
          <Route path="/report/main" exact component={ReportMain} />
          <Route path="/report/exercise" exact component={ReportExercise} />
          <Route path="/report/food" exact component={ReportFood} />
          </BRouter>
        )}
      </ResponsiveContext.Consumer>
    );}
  }
}

export default NavBar;