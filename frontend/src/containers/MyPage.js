import React, { Component } from "react";
import { ResponsiveContext, Box, FormField, Button, Image, Text, TextArea, Form } from "grommet";
import TestImage from '../assets/commonChallenge.jpg';

const FormFieldLabel = props => {
  const { required, label, ...rest } = props;
  return (
    <FormField
      label={
        required ? (
          <Box direction="row">
            <Text>{label}</Text>
            <Text color="status-critical">*</Text>
          </Box>
        ) : (
          label
        )
      }
      required={required}
      {...rest}
    />
  );
};

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
              <Box direction="column" margin="medium">
               {/* 회원가입 폼 */}
               <Box align="center" margin="medium">
                 <Form>
                  {/* 사진, 상태메시지 */}
                  <Box direction="row-responsive">
                    {/* 클래스네임으로 정해줘서 css파일을 만들어서 div 속성으로 round처리 해야 이미지가 안깨진다. 백그라운드로 처리하면/ or css in js를 사용해서 스타일을 주거나 하면 된다.  */}
                      <Image src={TestImage}></Image>
                    <TextArea placeholder="상태 메세지"></TextArea>
                  </Box>
                  {/* Form  */}
                  <Box direction="row-responsive" >
                    <FormFieldLabel name="name" label="Name" />
                    <FormFieldLabel name="pasword" label="Password" type="password" />
                  </Box>
                  <Box direction="row-responsive">
                    <FormFieldLabel name="height" label="height" />
                    <FormFieldLabel name="newPassword" label="New Password" />
                  </Box>
                  <Box direction="row-responsive">
                    <FormFieldLabel name="weight" label="weight"></FormFieldLabel>
                    <FormFieldLabel name="newPasswordConfirm" label="NewPasswordConfirm"></FormFieldLabel>
                  </Box>     
                  <Box align="center" direction="row-responsive" margin="medium">
                    <Button type="submit" label="취    소" primary />
                    <Button type="submit" label="변경완료" primary />
                  </Box>
                  <Box align="center">
                    <Button type="submit" label="탈 퇴" primary />
                  </Box>
                </Form>
                </Box>
              {/* 프로필 전체 영역 / */}
              </Box>

            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default MyPage;
