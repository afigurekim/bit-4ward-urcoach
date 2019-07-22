import React,{Component} from 'react';
import { Box, Heading, ResponsiveContext,Text } from "grommet";

class ExerciseList extends Component{
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <ResponsiveContext.Consumer>
      {size => (
        <Box direction="row" align="center" justify="center">
         <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
            {/* 헤딩 */}
            <Heading margin={{ top: "10%", bottom: "5%" }} >운동 루틴</Heading>
            {/* 카드형식으로 - 넓으면 3개 2개 모바일 1개 */}
            <Box direction="row-responsive" justify="center" align="center" margin={{bottom:"10%"}}>
            {/* 웹 창이 작아지면 */}
            {(size == 'small') ? (
              <Box direction="row" align="center" border="all" round="small" >  
                <Box height="small" width="small" margin="small">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/YYFvGbSrP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
                <Box direction="column" width="medium">
                  <Box>
                    
                  </Box>
                  <Box>
                    <Text>피티점프</Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box gap="medium" direction="row">
                <Box direction="row" align="center" border="all" round="small" >  
                  <Box height="small" width="small" margin="small">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/YYFvGbSrP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                  </Box>
                  <Box direction="column" width="medium">
                    <Box>
                      
                    </Box>
                    <Box>
                      <Text>이것만 하면 오늘 운동 끝!</Text>
                    </Box>
                  </Box>
                </Box>
                <Box direction="row" align="center" border="all" round="small" >  
                  <Box height="small" width="small" margin="small">
                    
                  </Box>
                  <Box direction="column" width="medium">
                    <Box>
                     
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
    )
  }
}
export default ExerciseList;