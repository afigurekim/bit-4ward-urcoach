import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, ResponsiveContext, Image, Text, Button } from "grommet";
import {Link, Route} from 'react-router-dom';
import ExerciseList from './ExerciseList';

//고정된 파일을 가져올때는 조건처리만 하면 되고, 사진업로드는 디비 저장해야한다.
//사진을 assets폴더 넣고, db의 파일명을 저장해서 불러온다.
//파일업로드 

//axios사용해서 운동 제목 selelctAll

class ChallengeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      exercises: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount 접근");
    axios
      .get(`http://localhost:8080/challenges/findAll`)
      .then(res => {
        // console.log(res);
        const challenges = res.data;
        this.setState({
          challenges
        });
      })
      .catch(res => {
        alert("aixos 실패");
      });
  }

  // ExerciseName을 클릭하면 해당 운동 목록들로 간다.
  // challengeId를 가지고 ExerciseList 컴포넌트로 간다.
  // toExerciseList(challengeId){
  
  // }

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
              {/* 헤딩 */}
              <Heading margin={{ top: "10%", bottom: "5%" }}>
                챌린지 목록
              </Heading>

              {/* row-responsive */}
              {this.state.challenges.map( challenge => {
                  return(
                    <Box
                      direction="row-responsive"
                      justify="center"
                      align="center"
                      margin={{ bottom: "10%" }}
                      key= {challenge.challengeId}
                    >
                      <Box direction="row-responsive" align="center" border="all" round="small">
                        <Box direction="row-responsive" height="small" width="small" margin="small">
                          {/* challengePhoto */}
                          <Image
                            src= {process.env.PUBLIC_URL+challenge.challengePhoto}
                            alt= {process.env.PUBLIC_URL+challenge.challengePhoto}
                            fit="cover"
                            round="large"
                          />
                        </Box>
                        {/* challengeName, Text */}
                        <Box direction="column" width="medium">
                          <Box>
                            <Link to = {{
                              pathname : `/exerciselist/${challenge.challengeId}`,
                              
                            }}>
                            <Button>
                              <Heading level="3">
                                {/* challengeName */}
                                {challenge.challengeName}
                              </Heading>
                            </Button>
                            </Link>
                          </Box>
                          <Box>
                            {/* challengeText */}
                            <Text>{challenge.challengeText}</Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                

                  )
                }
              )}

            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default ChallengeList;
