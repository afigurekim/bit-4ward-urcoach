import React, { Component } from "react";
import { ResponsiveContext, Box, TextInput, Button, CheckBox, Heading, Form, FormField, Text } from "grommet";


class MemChallenge extends Component {
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
            
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MemChallenge;
