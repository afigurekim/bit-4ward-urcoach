import React, { Component } from "react";
import { Box, Heading, ResponsiveContext, Text, Clock, Button } from "grommet";
import axios from "axios";

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        challengeId: ''
  };
}
  componentDidMount() {
    console.log("exerciselist 접근");
    // const {challenge}
    axios
        .get(`http://localhost/8080/exercises/findByChallengeId/{challengeId}`)
        .then(res => {
            console.log("exerciselist : " + res.data );
        })
        .catch(res =>{
            alert("접근 실패")
        });
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" overflow={{ vertical: "hidden" }}>
            {/* 상단 제목  */}
            <Box align="center" justify="center"><Heading margin={{top: "10%", bottom: "5%"}}> 해당 운동 목록 </Heading></Box>
            {/* 전체 영역 잡기 */}
            <Box direction="row-responsive" justify="center" align="center" margin={{bottom:"5%"}}>
                {/* 카드 형식, 운동 하나에 담을 내용 */}
                <Box direction="column" align="center" border="all" round="small" margin="small">
                    {/* 유튜브 영상 */}
                    <Box margin="small" align="center">
                        <iframe width="320" height="315" src="https://www.youtube.com/embed/YYFvGbSrP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </Box>
                    {/* 텍스트 */}
                    <Box direction="column" align="center" pad="small">
                        {/* 운동 제목 */}
                        <Heading level="3"> 머신 인클라인 체스트 프레스 </Heading>
                        {/* 세트, 카운트 */}
                        <Box direction="row">
                            <Text>1세트</Text>
                            <Text>60초</Text>
                        </Box>
                    </Box>
                {/* 운동 하나 컨텐츠 / */}
                </Box> 
                {/* 카드 형식, 운동 하나에 담을 내용 */}
                <Box direction="column" align="center" border="all" round="small" margin="small">
                    {/* 유튜브 영상 */}
                    <Box margin="small" align="center">
                        <iframe width="320" height="315" src="https://www.youtube.com/embed/YYFvGbSrP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </Box>
                    {/* 텍스트 */}
                    <Box direction="column" align="center" pad="small">
                        {/* 운동 제목 */}
                        <Heading level="3"> 머신 인클라인 체스트 프레스 </Heading>
                        {/* 세트, 카운트 */}
                        <Box direction="row">
                            <Text >1세트</Text>
                            <Text>60초</Text>
                        </Box>
                    </Box>
                {/* 운동 하나 컨텐츠 / */}
                </Box> 
                {/* 카드 형식, 운동 하나에 담을 내용 */}
                <Box direction="column" align="center" border="all" round="small" margin="small">
                    {/* 유튜브 영상 */}
                    <Box margin="small" align="center">
                        <iframe width="320" height="315" src="https://www.youtube.com/embed/YYFvGbSrP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </Box>
                    {/* 텍스트 */}
                    <Box direction="column" align="center" pad="small">
                        {/* 운동 제목 */}
                        <Heading level="3"> 머신 인클라인 체스트 프레스 </Heading>
                        {/* 세트, 카운트 */}
                        <Box direction="row">
                            <Text>1세트</Text>
                            <Text>60초</Text>
                        </Box>
                    </Box>
                {/* 운동 하나 컨텐츠 / */}
                </Box>
            </Box>

            {/* 스톱워치, 시간 체크 */}
            <Box direction="row" align="center" margin={{bottom:"5%"}}>
                <Button label="도전" primary  margin="medium"></Button>
                <Button label="완료" primary  margin="medium"></Button>
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
