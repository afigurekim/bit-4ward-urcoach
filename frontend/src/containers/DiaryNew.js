import React, { Component } from 'react';
<<<<<<< HEAD
import { Box, Button, Form, FormField, Heading, RangeInput, ResponsiveContext, Text, TextArea } from 'grommet';
import PhotoUpload from '../components/PhotoUpload';
=======
import { 
  Box, 
  Button, 
  Form, 
  FormField, 
  Heading, 
  Image, 
  RangeInput, 
  ResponsiveContext, 
  Text, 
  TextArea 
} from 'grommet';
import axios from 'axios';
import NullPhoto from '../assets/null_photo.png';
>>>>>>> DH

class DiaryNew extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      date: date,
=======

    this.state = {
      date: '',
>>>>>>> DH
      diaryDays: 0,
      diaryGoal: 0,
      diaryFat: 0.0,
      diaryWater: 0.0,
      diaryMuscle: 0.0,
<<<<<<< HEAD
      diarySkeletal: 0.0
=======
      diarySkeletal: 0.0,
      diaryComment: '',
      newPhoto: '',
      diaryPhoto: '',
      memberId: 1
>>>>>>> DH
    }

    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }
<<<<<<< HEAD
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="column" align="center" justify="center" pad={{ }}>
            <Heading level="3">다이어리 새 글</Heading>
            <Text>{this.state.date}</Text>
            <Box fill direction="row" align="stretch" justify="evenly">
              <Box 
                direction="column" 
                align="center" 
                justify="center" 
=======

  changePhoto = (e) => {
    let self = this

    this.setState({ newPhoto: e.target.files[0] })

    let data = new FormData()
    data.append("file", e.target.files[0])

    let fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0])
    fileReader.onload = function(e){
      e.preventDefault()
      const headers = { "Content-Type": "multipart/form-data" }
      axios.post("http://localhost:8080/upload", data, { headers: headers })
        .then(res => { 
          alert("사진이 업로드 되었습니다")
          document.getElementById("photoThumb").src = e.target.result
          self.setState({ diaryPhoto: res.data })
        })
        .catch(e => { alert("업로드 실패")})
    }
  }

  setDiary = (memberId) => (e) => {
    e.preventDefault()
    console.log(memberId)
    let data = {
      diaryDate: this.state.date,
      diaryDays: this.state.diaryDays,
      diaryGoal: this.state.diaryGoal,
      diaryFat: this.state.diaryFat,
      diaryWater: this.state.diaryWater,
      diaryMuscle: this.state.diaryMuscle,
      diarySkeletal: this.state.diarySkeletal,
      diaryComment: this.state.diaryComment,
      diaryPhoto: this.state.diaryPhoto
    }
    let headers = {
      'Content-type' : 'application/json',
      'Authorization' : 'JWT fefege...'
    }
    axios.post(`http://localhost:8080/diary/${memberId}`, JSON.stringify(data), { headers: headers })
      .then(res => {
        alert("다이어리 작성이 완료되었습니다")
        this.props.history.push('/diary/list')
      })
      .catch(e => { alert("작성 실패")})
  }

  componentDidMount() {
    const { date } = this.props.match.params
    this.setState({ date: date })
  }

  render() {
    let diaryThumb = NullPhoto
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="column" align="center" justify="center">
            <Heading level="3">다이어리 새 글</Heading>
            <Text>{this.state.date}</Text>
            <Box fill direction="row" align="stretch" justify="evenly" wrap>
              <Box 
                direction="column" 
                align="center" 
                justify="evenly"
>>>>>>> DH
                width="small" 
                height="medium" 
                round="small" 
                border={{ size: "medium", style: "dashed" }}
              >
<<<<<<< HEAD
                <Box fill align="stretch" justify="evenly">
                <PhotoUpload />
=======
                <Box fill align="stretch" justify="evenly" alignContent="center" gap="medium">
                  <Form>
                    <Box height="small" width="small">
                      <Image fit="contain" src={diaryThumb} alt="Diary Photo" id="photoThumb" />
                    </Box>
                    <Box pad={{ top: "20%", bottom: "10%" }}>
                      <Text size="medium" weight="bold" textAlign="center">
                        사진 등록
                      </Text>
                      <Text size="small" textAlign="center">jpg, png, gif</Text>
                      <Text size="small" textAlign="center">5MB 이내로</Text>
                    </Box>
                    <Box width="xsmall" overflow="visible" margin={{ left: "25%" }} pad={{ horizontal: "6%" }}>
                      <input id="uploadButton" type="file" accept="image/*" onChange={this.changePhoto} />
                    </Box>
                  </Form>
>>>>>>> DH
                </Box>
              </Box>
              <Box direction="column" align="center" justify="center" basis="2/3">
                <Box fill="horizontal">
<<<<<<< HEAD
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
=======
                  <Form>
                    <FormField 
                      label="운동 경과일" 
                      name="diaryDays" 
                      component={RangeInput} 
                      value={this.state.diaryGoal} 
                      onChange={this.handleChange} 
                      min={0} max={999} step={1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diaryDays}일
                      </Text>
                    </Box>
                    <FormField 
                      label="목표 달성률" 
                      name="diaryGoal" 
                      component={RangeInput} 
                      value={this.state.diaryGoal} 
                      onChange={this.handleChange} 
                      min={0} max={100} step={1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diaryGoal}%
                      </Text>
                    </Box>
                    <FormField 
                      label="체지방률" 
                      name="diaryFat" 
                      component={RangeInput} 
                      value={this.state.diaryFat} 
                      onChange={this.handleChange} 
                      min={0} max={60} step={0.1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diaryFat}%
                      </Text>
                    </Box>
                    <FormField 
                      label="체수분" 
                      name="diaryWater" 
                      component={RangeInput} 
                      value={this.state.diaryWater} 
                      onChange={this.handleChange} 
                      min={0} max={100} step={0.1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diaryWater}L
                      </Text>
                    </Box>
                    <FormField 
                      label="근육량" 
                      name="diaryMuscle" 
                      component={RangeInput} 
                      value={this.state.diaryMuscle} 
                      onChange={this.handleChange} 
                      min={0} max={100} step={0.1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diaryMuscle}kg
                      </Text>
                    </Box>
                    <FormField 
                      label="골격근량" 
                      name="diarySkeletal" 
                      component={RangeInput} 
                      value={this.state.diarySkeletal} 
                      onChange={this.handleChange} 
                      min={0} max={100} step={0.1} 
                    />
                    <Box align="center">
                      <Text size="small">
                        {this.state.diarySkeletal}kg
                      </Text>
                    </Box>
                    <FormField 
                      label="소감" 
                      name="diaryComment" 
                      component={TextArea} 
                      onChange={this.handleChange} 
                      placeholder="300자 이내로 입력해주세요" 
                      validate={{ regexp: /^(...){0,300}$/, message: "300자 이내로 입력해주세요" }} 
                    />
                    <Box 
                      direction="row" 
                      alignContent="start" 
                      pad={{ vertical: "medium" }} 
                      gap="medium"
                    >
                      <Button 
                        primary 
                        color="dark-2" 
                        label="저장" 
                        onClick={this.setDiary(this.state.memberId)} 
                        {...this.props} 
                      />
                      <Button 
                        primary 
                        color="light-2" 
                        label="취소" 
                        href={"/diary/list"}
                        {...this.props} 
                      />
>>>>>>> DH
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

export default DiaryNew;