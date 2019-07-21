import React, { Component } from "react";
import { ResponsiveContext, Box, TextInput, Button, CheckBox, Heading, Form, FormField, Text } from "grommet";
import { Google } from "grommet-icons";

// 필요 라벨 생성
const FormFieldLabel = props =>{
    const{required, label, ...rest} =props;
    return(
        <FormField label={required ?
             (<Box direction="row">
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
}

// 필요한 폼 -> 이메일, 비밀번호, 구글,카카오톡,네이버 로그인
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: !!props.checked };
  }
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row" align="center" justify="center">
            <Box flex align="center" justify="center" overflow={{ vertical: "hidden" }} >
                {/* 로그인 제목 */}
                <Heading margin={{ top: "10%" }}> 로그인 </Heading>

                <Box direction="row-responsive" justify="center" align="center" pad="xlarge" gap="medium" round margin={{bottom:"5%"}}>
                    {/* 로그인 폼 */}
                    <Box align="center" pad="large" margin={{bottom:"10%"}}>
                        <Form>
                            <FormFieldLabel name="email" label="Email"/>
                            <FormFieldLabel name="pasword" label="Password" type="password"/>
                            <Box align="end" margin={{top:"20%"}}>
                                <Button type="submit" label="로그인" primary />
                            </Box>
                        </Form>
                    </Box>

                    {/* API를 통한 로그인 */}
                    <Box>
                        <Button label="구글로 로그인" primary margin="medium"></Button>
                        <Button label="카카오톡으로 로그인" primary margin="medium"></Button>
                        <Button label="네이버로 로그인" primary margin="medium"></Button>
                    </Box>
                </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
export default Login;
