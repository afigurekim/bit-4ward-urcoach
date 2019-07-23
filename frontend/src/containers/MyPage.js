import React, { Component } from "react";
import { ResponsiveContext, Box, TextInput, Button, Heading } from "grommet";

class MyPage extends Component {
  constructor(props) {
    super(props);
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
              {/* 프로필 전체 영역 */}
              <Box>
                {/*  */}
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MyPage;
