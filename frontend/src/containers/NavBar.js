import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route} from 'react-router-dom';
<<<<<<< HEAD
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
<<<<<<< HEAD
import CoachMatching from './CoachMatching';
import CoachMatchingDetail from './CoachMatchingDetail';
import GymMatchingDetail from './GymMatchingDetail'
import GymMatching from './GymMatching'
=======
import {Box,Button,Heading,Layer,Menu,ResponsiveContext,Text} from 'grommet';
import { FormClose, Menu as MenuIcon } from 'grommet-icons';
import logo from '../assets/logo.png';
import Main from '../components/Main';
import SignUpType from './Member/SignUpType';
import Login from './Member/Login';
import SignUp from './Member/SignUp';
import MyPage from './Member/MyPage';
import ChallengeList from './Challenge/ChallengeList';
import ExerciseList from './Challenge/ExerciseList';
import MyChallengeEnter from './MyChallenge/MyChallengeEnter';
import MyChallengeName from './MyChallenge/MyChallengeName';
import MyChallengeList from './MyChallenge/MyChallengeList';
import MyChallengeExerciseInsert from './MyChallenge/MyChallengeExerciseInsert';
import MyChallengeExerciseList from './MyChallenge/MyChallengeExerciseList';
=======
>>>>>>> DH
import DiaryNew from './DiaryNew';
import DiaryList from './DiaryList';
import DiaryRead from './DiaryRead';
import DiaryEdit from './DiaryEdit';
import MyExerciseList from './MyExerciseList';
import MyExerciseRead from './MyExerciseRead';
<<<<<<< HEAD
import PhotoUpload from '../components/PhotoUpload';
import ReportMain from './ReportMain';
import ReportExercise from './ReportExercise';
import ReportFood from './ReportFood';
import CoachMatching from './CoachMatching';
import CoachMatchingDetail from './CoachMatchingDetail';
import GymMatchingDetail from './GymMatchingDetail';
import GymMatching from './GymMatching';
import CoachInForm from './CoachInForm';

// 로그인했을 때 로그인, 회원가입 버튼 --> 로그아웃, 프로필버튼으로 수정 --> 콜백으로 해야함
>>>>>>> origin/YJ
=======
import ReportMain from './ReportMain';
import ReportExercise from './ReportExercise';
import ReportFood from './ReportFood';
>>>>>>> DH

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
<<<<<<< HEAD
    imageIsReady: false,
    // session에 memberId 찾기
    check: sessionStorage.getItem('memberEmail')
  }

  // 로그인 검사 , session 확인
  isLoginCheck = (props) => {
    sessionStorage.getItem('memberEmail')
    this.setState({
      check: true
    })
    alert('로그인 체크')
  }
  // 로그아웃 정의
  isLogout = (props) => {
    sessionStorage.clear();
    this.setState({
      check: false
    })
    window.location.assign("/")
=======
    imageIsReady: false
>>>>>>> DH
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
<<<<<<< HEAD

=======
>>>>>>> DH
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
                      { label: "내 챌린지", href: "/MyChallengeEnter" }
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
<<<<<<< HEAD
                      { label: "데일리 리포트", href: "#" },
                      { label: "운동 다이어리", href: "/diary/new" }
=======
                      { label: "데일리 리포트", href: "/report/main" },
                      { label: "운동 다이어리", href: "/diary/list" }
>>>>>>> DH
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
                      { label: "코치 추천", href: "/coachmatching" },
                      { label: "휘트니스 추천", href: "/GymMatching" }
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
<<<<<<< HEAD
                  {this.state.check ? 
                    <Box direction="row" align="center" gap="small" pad="xsmall">
                      <Button primary color="dark-2" label="마이페이지" href="/MyPage" />
                      <Button primary color="light-2" label="로그아웃" onClick={this.isLogout}/>
                    </Box>
                    :  
                    <Box direction="row" align="center" gap="small" pad="xsmall">
                      <Button primary color="dark-2" label="로그인" href="/login"/>
                      <Button primary color="light-2" label="회원가입" href="/SignUpType" />
                    </Box>
                  }
=======
                  <Box direction="row" align="center" gap="small" pad="xsmall">
                    <Button primary color="dark-2" label="로그인" href="/login"/>
                    <Button primary color="light-2" label="회원가입" href="/signup" />
                  </Box>
>>>>>>> DH
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
<<<<<<< HEAD

                            {this.state.check ? 
                              <Box direction="row" justify="center" gap="large" pad={{ vertical: "large" }}>
                                <Button primary color="dark-2" label="마이페이지" href="/MyPage" />
                                <Button primary color="light-2" label="로그아웃" href="/" onClick={this.isLogout}/>
                              </Box>
                              :
                              <Box direction="row" justify="center" gap="large" pad={{ vertical: "large" }}>
                                <Button primary color="dark-2" label="로그인" href="/login"/>
                                <Button primary color="light-2" label="회원가입" href="/SignUpType" />
                              </Box>
                            }

=======
                            <Box direction="row" justify="center" gap="large" pad={{ vertical: "large" }}>
                              <Button primary color="dark-2" label="로그인" href="/login" />
                              <Button primary color="light-2" label="회원가입" href="/signup"/>
                            </Box>
>>>>>>> DH
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
                                <Text><MenuA href="/MyChallengeEnter">내 챌린지</MenuA></Text>
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
<<<<<<< HEAD
                                <Text><MenuA href="/diary/new">운동 다이어리</MenuA></Text>
=======
                                <Text><MenuA href="/diary/list">운동 다이어리</MenuA></Text>
>>>>>>> DH
                              </Box>
                            </Box>
                            <Box tag="ul" justify="start" alignContent="start" alignSelf="start" direction="column">
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Heading level="4" size="small">
                                  매칭
                                </Heading>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
                                <Text><MenuA href="/coachmatching">코치 추천</MenuA></Text>
                              </Box>
                              <Box tag="li" pad="small" direction="row" justify="between">
<<<<<<< HEAD
                                <Text><MenuA href="/GymMatching">피트니스 추천</MenuA></Text>
=======
                                <Text><MenuA href="/GymMatching">휘트니스 추천</MenuA></Text>
>>>>>>> origin/YJ
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
<<<<<<< HEAD
          <Route path="/SignUpType" component={SignUpType} />
          <Route path="/login" component={Login} />
          <Route path="/coachmatching" component={CoachMatching} />
          <Route path="/challengelist" component={ChallengeList} />
<<<<<<< HEAD
          <Route path="/CoachMatchingDetail/:coachId" component={CoachMatchingDetail} />
          <Route path="/GymMatchingDetail" exact component={GymMatchingDetail}/>
          <Route path="/GymMatching" exact component={GymMatching}/>
=======
          <Route path="/exerciselist/:challengeId/:challengeName" component={ExerciseList} />
          <Route path="/MyChallengeEnter" component={MyChallengeEnter} />
          <Route path="/MyChallengeName" component={MyChallengeName} />
          <Route path="/MyChallengeList" component={MyChallengeList} />
          <Route path="/MyChallengeExerciseInsert/:myChallengeId" component={MyChallengeExerciseInsert} />
          <Route path="/MyChallengeExerciseList/:myChallengeId/:myChallengeName/:exerciseId" component={MyChallengeExerciseList} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/SignUp/:memberType" exact component={SignUp} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/diary/new" exact component={DiaryNew} />
          <Route path="/diary/list" exact component={DiaryList} />
          <Route path="/diary/read" exact component={DiaryRead} />
          <Route path="/diary/edit" exact component={DiaryEdit} />
          <Route path="/photoupload" exact component={PhotoUpload} />              
=======
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
>>>>>>> DH
          <Route path="/myexercise/list" exact component={MyExerciseList} />
          <Route path="/myexercise/read" exact component={MyExerciseRead} />
          <Route path="/report/main" exact component={ReportMain} />
          <Route path="/report/exercise" exact component={ReportExercise} />
          <Route path="/report/food" exact component={ReportFood} />
<<<<<<< HEAD
          <Route path="/coachmatching" component={CoachMatching} />
          <Route path="/CoachMatchingDetail/:coachId/:gymId" component={CoachMatchingDetail} />
          <Route path="/GymMatching" exact component={GymMatching}/>
          <Route path="/GymMatchingDetail/:gymId" exact component={GymMatchingDetail}/>
          <Route path="/CoachInForm" component={CoachInForm}/>

>>>>>>> origin/YJ
=======
>>>>>>> DH
          </BRouter>
        )}
      </ResponsiveContext.Consumer>
    );}
  }
}

export default NavBar;