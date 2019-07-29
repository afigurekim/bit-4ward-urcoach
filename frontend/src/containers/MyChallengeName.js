/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  ResponsiveContext,
  Box,
  TextInput,
  Heading,
  Form,
  FormField,
  Button
} from "grommet";
import axios from "axios";

class MyChallengeName extends Component {

  constructor(props) {
    super(props);
    this.state={
        myChallengeName:''
    }
  }

  //넣은 값 변경하기
  writeChallengeName = (e) => {
    this.setState({
      // myChallengeName: e.target.value
      [e.target.name]: e.target.value
    })
  }

//버튼 누르면 myChallengeName DB에 저장
    insertChallengeName = (e) => {
      e.preventDefault();
      console.log("submit 이벤트 진입")
      console.log("this.state.myChallengeName : "+ this.state.myChallengeName)
        let data={
          myChallengeName: this.state.myChallengeName
        }
        let headers={
            'Content-type' : 'application/json',
            'Authorization' : 'JWT fefege...'
        }
        // const {myChallengeName} = this.state;
          axios
          .post(`http://localhost:8080/myChallenges/insert`,JSON.stringify(data), {headers: headers})
          .then(res =>{
            console.log('myChallInsert Name 넣기')
            console.log('res.data : '+ res.data)
            console.log('res : '+ res)
            console.log('data : '+ data)
            console.log('this.state.myChallengeName : '+ this.state.myChallengeName)
            // console.log('myChallengeName : '+ myChallengeName) 
      
            })
            .catch(e => {
                alert("axios 실패")
            })
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
              {/* 내 챌린지 만들기 */}
              <Heading margin={{top:"5%"}}> 나만의 챌린지 구성하기 </Heading>

              {/* 챌린지 이름 넣기 */}
              <Box align="center" justify="center" margin={{bottom:"10%", top:"5%"}}>
                <Form onSubmit={this.insertChallengeName}>
                <FormField label="챌린지 이름" align="center" justify="center" onSubmit={this.insertChallengeName}>
                    <TextInput
                    placeholder="나만의 챌린지 이름 짓기"
                    size="large"
                    name= "myChallengeName"
                    value={this.state.myChallengeName}
                    onChange={this.writeChallengeName}
                    />
                </FormField>
                  <Button type="submit" label="운동 루틴 조합하기" margin={{top:"10%"}} href="/MyChallengeExercise"></Button>
                </Form>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MyChallengeName;
