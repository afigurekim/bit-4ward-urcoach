import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, ResponsiveContext, Image, Text, Button } from "grommet";
import Forlife from "../assets/forlife_exercise1.jpg";

//사진을 assets폴더 넣고, db의 파일명을 저장해서 불러온다.

//axios사용해서 운동 제목 selelctAll

class ChallengeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount 접근");
    axios
      .get(`http://localhost:8080/challenges/findAll`)
      .then(res => {
        console.log(res);
        const challenges = res.data;
        this.setState({
          challenges
        });
      })
      .catch(res => {
        alert("aixos 실패");
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
                    >
                      <Box direction="row" align="center" border="all" round="small">
                        <Box height="small" width="small" margin="small">
                          {/* challengePhoto */}
                          <Image
                            src="chall"
                            alt="살기 위한 운동"
                            fit="cover"
                            round="small"
                          />
                        </Box>
                        <Box direction="column" width="medium">
                          <Box>
                            <Button href="/exerciselist">
                              <Heading level="3">
                                {/* challengeName */}
                                {challenge.challengeName}
                              </Heading>
                            </Button>
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
