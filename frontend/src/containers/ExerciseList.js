import React, { Component } from "react";
import { Box, Heading, ResponsiveContext, Text, Clock, Button } from "grommet";
import axios from "axios";

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        exercises: [],
        challengeName: ''
  }; 
}

  componentDidMount() {
    console.log("exerciselist componentDidMount 접근");
    const {challengeId, challengeName } = this.props.match.params;
    console.log("challengeId : " + challengeId )
    console.log("challengeName : " + challengeName )

    axios
        .get(`http://localhost:8080/exercises/findByChallengeId/${challengeId}`)
        .then(res => {
            console.log("axios challengeId : " + challengeId)
            console.log("axios challengeName : " + challengeName)

            const exercises = res.data

            this.setState({
                exercises,
                challengeName
            });
        })
        .catch(res =>{
            console.log("axios 접근 실패")
        });
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" overflow={{ vertical: "hidden" }}>
            {/* 상단 제목  */}
            <Box align="center" justify="center"><Heading margin={{top: "10%", bottom: "5%"}}> {this.state.challengeName} </Heading></Box>
            
            {/* 전체 박스 wrap */}
            <Box wrap="true" direction="row-responsive" justify="center" align="center" gap="medium">
            {/* map 값 select */}
            {this.state.exercises.map(exercise => {
                // console.log(exercise[0].exerciseVideo)
                return(
                    <Box direction="row-responsive">
                    {/* 전체 영역 잡기 */}
                    <Box direction="row-responsive" justify="center" align="center" margin={{bottom:"5%"}}>
                        {/* 카드 형식, 운동 하나에 담을 내용 */}
                        <Box direction="column" align="center" border="all" round="small" margin="small">
                            {/* 유튜브 영상 */}
                            <Box margin="small" align="center">
                                <iframe width="320" height="315" src={exercise.exerciseVideo} frameBorder="0" allow="accelermeter; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true"></iframe>
                            </Box>
                            {/* 텍스트 */}
                            <Box direction="column" align="center" pad="small">
                                {/* 운동 제목 */}
                                <Heading level="3"> {exercise.exerciseName} </Heading>
                                {/* 세트, 카운트 */}
                                <Box direction="row">
                                    <Text>{exercise.exerciseSet}</Text>
                                    <Text>{exercise.exerciseCount}</Text>
                                </Box>
                            </Box>
                        {/* 운동 하나 컨텐츠 끝 */}
                        </Box> 
                    {/* 전체 영역 잡기 끝 */}
                    </Box>
                    </Box>
                );
            // map 값 끝
            })}
            {/* wrap Box 끝 */}
            </Box>

            {/* 스톱워치, 시간 체크 */}
            <Box direction="row" align="center" margin={{bottom:"5%"}}>
                <Button label="도전" primary  margin="medium" ></Button>
                <Button label="완료" primary  margin="medium" ></Button>
            </Box>
            {/* 스톱워치 기능 */}
            <Box align = "center" justify="start" margin={{bottom:"10%"}}>
                <Clock type = "digital"/>
            </Box>
                
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default ExerciseList;
