import React, { Component } from 'react';
import { Box, Calendar, Heading, ResponsiveContext } from 'grommet';

class DiaryList extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" margin={{ vertical: '0' }}>
              <Heading level="3">다이어리 날짜 선택</Heading>
              <Calendar 
                date={(new Date()).toISOString()}
                daysOfWeek="true" 
                locale="ko-KR"
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DiaryList;