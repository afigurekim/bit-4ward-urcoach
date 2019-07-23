import React, { Component } from "react";
import {
  ResponsiveContext,
  Box,
  TextInput,
  Button,
  CheckBox,
  Heading,
  Form,
  FormField,
  Text
} from "grommet";

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

// 필요한 폼 -> 이메일, 비밀번호, 구글,카카오톡,네이버 로그인
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: !!props.checked };
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
              {/* 회원가입 제목 */}
              <Heading margin={{ top: "10%" }}> 회원가입 </Heading>

              <Box
                direction="row-responsive"
                justify="center"
                align="center"
                pad="xlarge"
                gap="medium"
                round
                margin={{ bottom: "5%" }}
              >
                {/* 회원가입 폼 */}
                <Box align="center" margin="medium">
                  <Form>
                    <FormFieldLabel name="name" label="Name" />
                    <FormFieldLabel name="email" label="Email" />
                    <FormFieldLabel
                      name="pasword"
                      label="Password"
                      type="password"
                    />
                    <Box align="end" margin={{ top: "20%" }}>
                      <Button type="submit" label="회원가입" primary />
                    </Box>
                  </Form>
                </Box>
                {/* 또는 */}
                <Box align="center" margin="medium">
                  <Text> 또는 </Text>
                </Box>
                {/* API를 통한 회원가입 */}
                <Box>
                  <Button label="구글로 회원가입" primary margin="medium" />
                  <Button
                    label="카카오톡으로 회원가입"
                    primary
                    margin="medium"
                  />
                  <Button label="네이버로 회원가입" primary margin="medium" />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default SignUp;
