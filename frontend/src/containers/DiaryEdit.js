import React, { Component } from 'react';
import { Box, Button, Form, FormField, Heading, RangeInput, ResponsiveContext, Text, TextArea } from 'grommet';
import PhotoUpload from '../components/PhotoUpload';

class DiaryEdit extends Component {
  constructor() {
    super();
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      date: date,
      diaryDays: 0,
      diaryGoal: 0,
      diaryFat: 0.0,
      diaryWater: 0.0,
      diaryMuscle: 0.0,
      diarySkeletal: 0.0
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
          <Box direction="column" align="center" justify="center" pad={{ }}>
            <Heading level="3">다이어리 글 수정</Heading>
            <Text>{this.state.date}</Text>
            <Box fill direction="row" align="stretch" justify="evenly">
              <Box 
                direction="column" 
                align="center" 
                justify="center" 
                width="small" 
                height="medium" 
                round="small" 
                border={{ size: "medium", style: "dashed" }}
              >
                <Box fill align="stretch" justify="evenly">
                <PhotoUpload />
                </Box>
              </Box>
              <Box direction="column" align="center" justify="center" basis="2/3">
                <Box fill="horizontal">
                  <Form onSubmit={({ value }) => console.log("Submit", value)}>
                    <FormField label="운동 경과일" name="diaryDays" component={RangeInput} value={this.state.diaryGoal} onChange={this.handleChange} min={0} max={999} step={1} />
                    <Box align="center"><Text size="small">{this.state.diaryDays}일</Text></Box>
                    <FormField label="목표 달성률" name="diaryGoal" component={RangeInput} value={this.state.diaryGoal} onChange={this.handleChange} min={0} max={100} step={1} />
                    <Box align="center"><Text size="small">{this.state.diaryGoal}%</Text></Box>
                    <FormField label="체지방률" name="diaryFat" component={RangeInput} value={this.state.diaryFat} onChange={this.handleChange} min={0} max={60} step={0.1} />
                    <Box align="center"><Text size="small">{this.state.diaryFat}%</Text></Box>
                    <FormField label="체수분" name="diaryWater" component={RangeInput} value={this.state.diaryWater} onChange={this.handleChange} min={0} max={100} step={0.1} />
                    <Box align="center"><Text size="small">{this.state.diaryWater}L</Text></Box>
                    <FormField label="근육량" name="diaryMuscle" component={RangeInput} value={this.state.diaryMuscle} onChange={this.handleChange} min={0} max={100} step={0.1} />
                    <Box align="center"><Text size="small">{this.state.diaryMuscle}kg</Text></Box>
                    <FormField label="골격근량" name="diarySkeletal" component={RangeInput} value={this.state.diarySkeletal} onChange={this.handleChange} min={0} max={100} step={0.1} />
                    <Box align="center"><Text size="small">{this.state.diarySkeletal}kg</Text></Box>
                    {/* <FormField label="체수분" name="diaryWater" validate={{ regexp: /^([]|[\d]{1,3}|[\d]{1,3}[.][\d]{1,2})$/, message: "1-2자리 소수자리만 입력해주세요" }} />
                    <FormField label="근육량" name="diaryMuscle" validate={{ regexp: /^([]|[\d]{1,3}|[\d]{1,3}[.][\d]{1,2})$/, message: "1-2자리 소수자리만 입력해주세요" }} />
                    <FormField label="골격근량" name="diarySkeletal" validate={{ regexp: /^([]|[\d]{1,3}|[\d]{1,3}[.][\d]{1,2})$/, message: "1-2자리 소수자리만 입력해주세요" }} /> */}
                    <FormField label="소감" name="diaryComment" component={TextArea} placeholder="300자 이내로 입력해주세요" validate={{ regexp: /^(...){0,300}$/, message: "300자 이내로 입력해주세요" }} />
                    <Box direction="row" alignContent="start" pad={{ vertical: "medium" }} gap="medium">
                      <Button primary type="submit" color="dark-2" label="저장" onClick={() => {}} {...this.props} />
                      <Button primary color="light-2" label="취소" onClick={() => {}} {...this.props} />
                    </Box>
                  </Form>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DiaryEdit;