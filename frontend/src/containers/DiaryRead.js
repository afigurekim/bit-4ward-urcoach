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
  ResponsiveContext, 
  Text, 
  TextArea 
} from 'grommet';
import axios from 'axios';
import NullPhoto from '../assets/null_photo.png';
>>>>>>> DH

class DiaryRead extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      date: date,
      diaryDays: 20,
      diaryGoal: 30,
      diaryFat: 0.0,
      diaryWater: 3.01,
      diaryMuscle: 20.3,
      diarySkeletal: 13.2,
      diaryComment: "토끼, 아이들의 나의 봅니다. 위에도 책상을 아스라히 슬퍼하는 가득 나의 계십니다. 이름과, 이름과, 이런 불러 봄이 가을 별 나는 까닭입니다. 내린 했던 봄이 아직 어머님, 내일 듯합니다. 걱정도 이름자 나의 위에 나는 이름과 까닭입니다. 차 이네들은 가난한 듯합니다. 오는 내린 남은 시인의 아침이 별 불러 마리아 까닭입니다. 가난한 때 나는 슬퍼하는 잔디가 우는 있습니다. 별 이름자를 시와 헤일 이름자 별들을 쓸쓸함과 풀이 계십니다. 걱정도 다하지 하나에 까닭입니다. 하늘에는 보고, 추억과 계십니다.",
      diaryPhoto: ''
    }
  }
  render() {
=======

    this.state = {
      date: '',
      diaryId: 0,
      diaryDays: 0,
      diaryGoal: 0,
      diaryFat: 0.0,
      diaryWater: 0.0,
      diaryMuscle: 0.0,
      diarySkeletal: 0.0,
      diaryComment: '',
      diaryPhoto: '',
      memberId: 1
    }
  }

  deleteDiary = (diaryId) => (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:8080/diary/delete/${diaryId}`)
      .then(res => {
        alert("다이어리 항목이 삭제되었습니다")
        this.props.history.push(`/diary/list`)
      })
      .catch(e => { alert('삭제 실패') })
  }

  componentDidMount() {
    let self = this
    const { date } = this.props.match.params
    this.setState({ date: date })
    let memberId = this.state.memberId
    axios.get(`http://localhost:8080/diary/find/${date}/${memberId}`)
      .then(res => {
        console.log(res.data)
        const diaryPost = res.data
        self.setState({ 
          diaryId: diaryPost.diaryId,
          diaryDays: diaryPost.diaryDays, 
          diaryGoal: diaryPost.diaryGoal,
          diaryFat: diaryPost.diaryFat,
          diaryWater: diaryPost.diaryWater,
          diaryMuscle: diaryPost.diaryMuscle,
          diarySkeletal: diaryPost.diarySkeletal,
          diaryComment: diaryPost.diaryComment,
          diaryPhoto: diaryPost.diaryPhoto
        })
      })
  }

  render() {
    let diaryThumb = this.state.diaryPhoto === null || this.state.diaryPhoto === "" 
      ? NullPhoto : "/user-image/" + this.state.diaryPhoto
>>>>>>> DH
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="column" align="center" justify="center" pad={{ }}>
            <Heading level="3">다이어리 글 읽기</Heading>
            <Text>{this.state.date}</Text>
<<<<<<< HEAD
            <Box fill direction="row" align="stretch" justify="evenly">
=======
            <Box fill direction="row" align="stretch" justify="evenly" wrap>
>>>>>>> DH
              <Box 
                direction="column" 
                align="center" 
                justify="center" 
                width="small" 
                height="medium" 
                round="small" 
<<<<<<< HEAD
                border={{ size: "medium", style: "dashed" }}
              >
                <Box fill align="stretch" justify="evenly">
                <PhotoUpload />
=======
                border={{ color: "brand", size: "medium" }}
              >
                <Box fill align="stretch" justify="evenly">
                  <Image src={diaryThumb} fit="contain" alt="Diary Photo" id="photoThumb" margin="xsmall" />
>>>>>>> DH
                </Box>
              </Box>
              <Box direction="column" align="center" justify="center" basis="2/3">
                <Box fill="horizontal">
<<<<<<< HEAD
                  <Form onSubmit={({ value }) => console.log("Submit", value)}>
                    <FormField label="운동 경과일" name="diaryDays" readOnly value={this.state.diaryDays}><Text margin={{ left: "small" }}>{this.state.diaryDays}일</Text></FormField>
                    <FormField label="목표 달성률" name="diaryGoal" readOnly value={this.state.diaryGoal}><Text margin={{ left: "small" }}>{this.state.diaryGoal}%</Text></FormField>
                    <FormField label="체지방률" name="diaryFat" readOnly value={this.state.diaryFat}><Text margin={{ left: "small" }}>{this.state.diaryFat}%</Text></FormField>
                    <FormField label="체수분" name="diaryWater" readOnly value={this.state.diaryWater}><Text margin={{ left: "small" }}>{this.state.diaryWater}L</Text></FormField>
                    <FormField label="근육량" name="diaryMuscle" readOnly value={this.state.diaryMuscle}><Text margin={{ left: "small" }}>{this.state.diaryMuscle}kg</Text></FormField>
                    <FormField label="골격근량" name="diarySkeletal" readOnly value={this.state.diaryMuscle}><Text margin={{ left: "small" }}>{this.state.diarySkeletal}kg</Text></FormField>
                    <FormField label="소감" name="diaryComment" component={TextArea} readOnly value={this.state.diaryMuscle}><Text margin={{ left: "small" }}>{this.state.diaryComment}</Text></FormField>
                    <Box direction="row" alignContent="start" pad={{ vertical: "medium" }} gap="medium">
                      <Button primary type="submit" color="dark-2" label="수정" onClick={() => {}} {...this.props} />
                      <Button primary color="dark-6" label="삭제" onClick={() => {}} {...this.props} />
                      <Button primary color="light-2" label="목록" onClick={() => {}} {...this.props} />
=======
                  <Form>
                    <FormField 
                      label="운동 경과일" 
                      name="diaryDays" 
                      readOnly 
                      value={this.state.diaryDays}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryDays}일
                      </Text>
                    </FormField>
                    <FormField 
                      label="목표 달성률" 
                      name="diaryGoal" 
                      readOnly 
                      value={this.state.diaryGoal}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryGoal}%
                      </Text>
                    </FormField>
                    <FormField 
                      label="체지방률" 
                      name="diaryFat" 
                      readOnly 
                      value={this.state.diaryFat}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryFat}%
                      </Text>
                    </FormField>
                    <FormField 
                      label="체수분" 
                      name="diaryWater" 
                      readOnly 
                      value={this.state.diaryWater}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryWater}L
                      </Text>
                    </FormField>
                    <FormField 
                      label="근육량" 
                      name="diaryMuscle" 
                      readOnly 
                      value={this.state.diaryMuscle}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryMuscle}kg
                      </Text>
                    </FormField>
                    <FormField 
                      label="골격근량" 
                      name="diarySkeletal" 
                      readOnly 
                      value={this.state.diarySkeletal}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diarySkeletal}kg
                      </Text>
                    </FormField>
                    <FormField 
                      label="소감" 
                      name="diaryComment" 
                      component={TextArea} 
                      readOnly 
                      value={this.state.diaryComment}
                    >
                      <Text margin={{ left: "small" }}>
                        {this.state.diaryComment}
                      </Text>
                    </FormField>
                    <Box 
                      direction="row" 
                      alignContent="start" 
                      pad={{ vertical: "medium" }} 
                      gap="medium"
                    >
                      <Button 
                        primary 
                        color="dark-2" 
                        label="수정" 
                        href={"/diary/edit/"+this.state.date} 
                      />
                      <Button 
                        primary 
                        color="dark-6" 
                        label="삭제" 
                        onClick={this.deleteDiary(this.state.diaryId)}
                        {...this.props} 
                      />
                      <Button 
                        primary 
                        color="light-2" 
                        label="목록" 
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

export default DiaryRead;