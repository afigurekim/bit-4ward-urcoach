import React, { Component } from 'react';
import { Box, FormField, Heading, MaskedInput, ResponsiveContext, Text, TextInput } from 'grommet';
import { Add as AddIcon } from 'grommet-icons';

class ReportFood extends Component {
  constructor() {
    super();
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let backday = new Date();
    backday.setDate(today.getDate()-30);
    let prevdate = backday.getFullYear() + '-' + (backday.getMonth() + 1) + '-' + backday.getDate();
    this.state = {
      date: date,
      prevdate: prevdate,
      foodtime: "",
      foodmenu: ""
    }

    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="column" align="center" justify="center">
            <Box flex align="center" justify="center" margin={{ top: 'medium' }}>
              <Heading level="3">일일 보고서</Heading>
              <Box pad={{ bottom: 'small' }} align="center">
                <Text>섭취량</Text>
                <Text size="small">{this.state.date}</Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium" margin={{ bottom: 'medium' }}>
              <Box direction="column" align="center">
                <Heading level="4">식사</Heading>
                <Box direction="row" align="center">
                  <Text>시간</Text>
                  <Box width="small" pad={{ left: "xsmall" }}>
                    <MaskedInput
                      name="foodtime"
                      mask={[
                        {
                          length: 2,
                          options: ["오전", "오후"],
                          regexp: /^오[전후]$/,
                          placeholder: "오전/오후"
                        },
                        { fixed: " " },
                        {
                          length: [1, 2],
                          options: Array.from({ length: 12 }, (v, k) => k + 1),
                          regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                          placeholder: "00시"
                        },
                        { fixed: ":" },
                        {
                          length: 2,
                          options: ["00", "15", "30", "45"],
                          regexp: /^[0-5][0-9]$|^[0-9]$/,
                          placeholder: "00분"
                        }
                      ]}
                      value={this.state.foodtime}
                      onChange={this.handleChange}
                    />
                  </Box>
                </Box>
                <Box align="center" width="small">
                  <FormField 
                    name="foodmenu" 
                    label="메뉴" 
                    placeholder="메뉴명" 
                    value={this.state.foodmenu} 
                    onChange={this.handleChange} 
                    validate={{ regexp: /^(...){0,10}$/, message: "10자 이내로 입력해주세요" }}
                  >
                    <TextInput placeholder="메뉴명" />
                  </FormField>
                </Box>
              </Box>
              <Box direction="column">
                <Heading level="4">수분</Heading>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ReportFood;