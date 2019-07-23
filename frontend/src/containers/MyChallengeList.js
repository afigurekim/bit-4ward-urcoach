import React, { Component } from "react";
import {
  ResponsiveContext,
  Box,
  Button,
  Heading,
  Text,
  Image
} from "grommet";
import commonChallengePhoto from '../assets/commonChallenge.jpg';

class MemChallengeList extends Component {
  constructor(props) {
    super(props);
  }

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
                  <Image src={commonChallengePhoto} alt="살기 위한 운동" fit="cover" round="small"/>
                </Box>
                <Box direction="column" width="medium">
                  <Box>
                    <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box gap="medium" direction="row">
                <Box direction="row" align="center" border="all" round="small" >  
                  <Box height="small" width="small" margin="small">
                    <Image src={commonChallengePhoto} alt="살기 위한 운동" fit="cover" round="small" />
                  </Box>
                  <Box direction="column" width="medium">
                    <Box>
                      <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
                    </Box>
                  </Box>
                </Box>
                <Box direction="row" align="center" border="all" round="small" >  
                  <Box height="small" width="small" margin="small">
                    <Image src={commonChallengePhoto} alt="살기 위한 운동" fit="cover" round="small"/>
                  </Box>
                  <Box direction="column" width="medium">
                    <Box>
                      <Button href="/exerciselist"><Heading level="3">살기 위한 운동</Heading></Button>
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
export default MemChallengeList;
