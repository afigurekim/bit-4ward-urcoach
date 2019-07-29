import React, { Component } from "react";
import { ResponsiveContext, Box, Button, Heading, Image } from "grommet";
import commonChallengePhoto from "../assets/commonChallenge.jpg";
import axios from "axios";

class MyChallengeExercise extends Component {
  constructor(props) {
    super(props);
    this.state={
        exercises: []
    }
  }

  // 시작할 때
  componentDidMount() {
    console.log("componentDidMount mychallenge 접근 : ");
    axios
      .get(`http://localhost:8080/exercises/findGroupByExerciseName`)
      .then(res => {
        console.log("axions 접근");

        const exercises = res.data;

        this.setState({
          exercises
        });
      })
      .catch(res => {
        console.log("axios 접근 실패");
      });
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box
              flex
              align="center"
              justify="center"
              overflow={{ vertical: "hidden" }}
            >
              {/* 운동 목록만 뿌려줄거야 */}
              <Heading level="2">운동 목록</Heading>
              {/* 전체 영역 wrap */}
              <Box
                wrap="true"
                direction="row-responsive"
                align="center"
                gap="medium"
                justify="center"
              >
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
                                    </Box>
                                </Box>
                            </Box>
                        </Box>


                    )
                })}
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MyChallengeExercise;
