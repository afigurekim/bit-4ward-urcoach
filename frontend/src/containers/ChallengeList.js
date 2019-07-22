import React, { Component } from "react";
import { Box, Heading, ResponsiveContext, Image, Text, Button } from "grommet";
import Forlife from '../assets/forlife_exercise1.jpg';
import TABATA from '../assets/tabata.jpg';

class ChallengeList extends Component {
  constructor(props) {
    super(props);
};
  
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
           <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
              {/* 헤딩 */}
              <Heading margin={{ top: "10%", bottom: "5%" }} >챌린지 목록</Heading>
              {/* 카드형식으로 - 넓으면 3개 2개 모바일 1개 */}
              <Box direction="row-responsive" justify="center" align="center" margin={{bottom:"10%"}}>
              {(size == 'small') ? (
                <Box direction="row" align="center" border="all" round="small" >  
                  <Box height="small" width="small" margin="small">
                    <Image src={Forlife} alt="살기 위한 운동" fit="cover" round="small"/>
                  </Box>
                  <Box direction="column" width="medium">
                    <Box>
                      <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
                    </Box>
                    <Box>
                      <Text>이것만 하면 오늘 운동 끝!</Text>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box gap="medium" direction="row">
                  <Box direction="row" align="center" border="all" round="small" >  
                    <Box height="small" width="small" margin="small">
                      <Image src={Forlife} alt="살기 위한 운동" fit="cover" round="small" />
                    </Box>
                    <Box direction="column" width="medium">
                      <Box>
                        <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
                      </Box>
                      <Box>
                        <Text>이것만 하면 오늘 운동 끝!</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box direction="row" align="center" border="all" round="small" >  
                    <Box height="small" width="small" margin="small">
                      <Image src={Forlife} alt="살기 위한 운동" fit="cover" round="small"/>
                    </Box>
                    <Box direction="column" width="medium">
                      <Box>
                        <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
                      </Box>
                      <Box>
                        <Text>이것만 하면 오늘 운동 끝!</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
                </Box>
              </Box>
           </Box>

        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default ChallengeList;
