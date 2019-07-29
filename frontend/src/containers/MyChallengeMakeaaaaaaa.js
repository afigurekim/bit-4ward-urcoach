/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { ResponsiveContext, Box, TextInput, Button, Heading, FormField, Form } from "grommet";
import axios from "axios";

class MemChallengeMake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeName: '',
      exercises: []
    }
  }

  // 시작할 때 
  componentDidMount(){
    console.log("componentDidMount mychallenge 접근 : ")
    axios
      .get(`http://localhost:8080/exercises/findGroupByExerciseName`)
      .then(res => {
        console.log("axions 접근")

        const exercises = res.data

        this.setState({
          exercises
        })
      })
      .catch(res => {
        console.log("axios 접근 실패")
      })
  }

  // input의 value값 이벤트 
  challengeInput = (e) => {

    axios
      .post(`http://localhost:8080/`)

    this.setState({
      challengeName: e.target.value
      
    })
  }



  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row-responsive" align="center" justify="center">
            <Box flex align="center" justify="center" overflow={{ vertical: "hidden" }} >
              {/* input form */}
              <Form>
              <Box align="center" justify="center">
                {/* 내 챌린지 만들기 */}
                <Heading> 나만의 챌린지 구성하기 </Heading>
          

                {/* 챌린지 이름 넣기 */}
                <Box width="68%"> 
                  <TextInput placeholder="원하는 챌린지 이름 넣기" size="large" 
                    value={this.state.challengeName} onChange={this.challengeInput}></TextInput>
                </Box>
                {/* 운동목록 */}
                <Heading level="2">운동 목록</Heading>
              </Box>
              <Box wrap="true" direction="row-responsive" align="center" gap="medium" justify="center">

              {this.state.exercises.map(exercise => {
                return(
                  <Box direction="column" key={exercise.exerciseId} align="center">
                  {/* 전체 영역 잡기 */}
                  <Box direction="row-responsive" justify="center" align="center" margin={{bottom:"5%"}}>
                  {/* 카드 형식, 운동 하나에 담을 내용 */}
                  <Box direction="column" align="center" border="all" round="small" margin="small">
                      {/* 유튜브 영상 */}
                      <Box margin="small" align="center">
                          <iframe width="320" height="315" src={exercise.exerciseVideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                      </Box>
                      {/* 텍스트 */}
                      <Box direction="column" align="center" pad="small">
                          {/* 운동 제목 */}
                          <Heading level="3"> {exercise.exerciseName }</Heading>
                          {/* 세트 */}
                          <Box direction="column" margin="small">
                              <FormField placeholder="세트" label="세트">
                                <TextInput></TextInput>
                              </FormField>
                            </Box>
                            {/* 카운트 or 초 */}
                            <Box direction="column" margin="small">
                              <FormField placeholder="카운트 & 초" label="카운트 & 초">
                                <TextInput></TextInput>
                              </FormField>
                            </Box>    
                              <Button label="이 운동 선택" primary margin="5%"></Button>
                      </Box>
                  {/* 운동 하나 컨텐츠 / */}
                  </Box> 
                  </Box>
                </Box>
                )
              })}
              {/* wrap 끝 */}
              </Box>
                     
            {/* 챌린지 목록 보여주기 */}
            <Box align="center"  margin={{bottom:"5%"}}>
              <Button label="내 챌린지 목록 보여주기" href="/MyChallengeList" primary></Button>
            </Box>
            {/* input form 끝 */}
            </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MemChallengeMake;
