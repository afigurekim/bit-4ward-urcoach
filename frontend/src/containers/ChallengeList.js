import React, { Component, useState } from "react";
import {
  Box,
  Heading,
  grommet,
  Grommet,
  InfiniteScroll,
  Table,
  TableRow,
  TabbleBody,
  TableCell,
  TableHeader,
  Text,
  ResponsiveContext,
  TableBody
} from "grommet";



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

           </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default ChallengeList;
