import React, { Component } from "react";
import { ResponsiveContext, Box, TextInput, Button, Heading } from "grommet";


class MemChallengeMake extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" overflow={{ vertical: "hidden" }} >
            
              {/* 내 챌린지 만들기 */}
              <Heading> 나만의 챌린지 구성하기 </Heading>
              {/* input form */}
              {/* 챌린지 이름 넣기 */}
              <Box width="68%"> 
                <TextInput placeholder="원하는 챌린지 이름 넣기" size="large"></TextInput>
              </Box>

              {/* 운동목록 */}
              <Heading level="2">운동 목록</Heading>
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
                         {/* 세트 */}
                         <Box direction="column" margin="small">
                            <TextInput placeholder="세트"></TextInput>
                          </Box>
                          {/* 카운트 or 초 */}
                          <Box direction="column" margin="small">
                            <TextInput placeholder="카운트 & 초" ></TextInput>
                          </Box>    
                            <Button label="이 운동 선택" primary></Button>
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
                         {/* 세트 */}
                         <Box direction="column" margin="small">
                            <TextInput placeholder="세트"></TextInput>
                        </Box>
                        {/* 카운트 or 초 */}
                        <Box direction="column" margin="small">
                            <TextInput placeholder="카운트 & 초" ></TextInput>
                        </Box>    
                            <Button label="이 운동 선택" primary></Button>
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
                        {/* 세트 */}
                        <Box direction="column" margin="small">
                            <TextInput placeholder="세트"></TextInput>
                        </Box>
                        {/* 카운트 or 초 */}
                        <Box direction="column" margin="small">
                            <TextInput placeholder="카운트 or 초" ></TextInput>
                        </Box>    
                            <Button label="이 운동 선택" primary ></Button>
                    </Box>
                {/* 운동 하나 컨텐츠 / */}
                </Box>
            </Box>
            {/* 챌린지 목록 보여주기 */}
            <Box align="center" margin={{bottom:"5%"}}>
              <Button label="내 챌린지 목록 보여주기" href="/MyChallengeList" primary></Button>
            </Box>






            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MemChallengeMake;
