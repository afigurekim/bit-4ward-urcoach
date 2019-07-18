import React, {Component , useState} from 'react';
import {ResponsiveContext, Box, TextInput, Button, CheckBox} from 'grommet';
import {Google, FormLock, View} from 'grommet-icons';

// 비밀번호 input
const PasswordInput = ({ password, ...rest }) => {
    const [inputValue, setValue] = useState(password);
    const [reveal, setReveal] = useState(false);
    return (
      <Box
        width="medium"
        direction="row"
        margin="large"
        align="center"
        round="small"
        border
      >
        <TextInput
          plain
         width='50'
          type={reveal ? "text" : "password"}
        //   value={inputValue}
          onChange={event => setValue(event.target.password)}
          {...rest}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <FormLock size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    );
  };


class SignUp extends Component{
    state = {
        name: '',
        email:'',

    };
    ref = React.createRef();
    constructor(props){
        super(props);
        this.state = {checked: !!props.checked};
        
        
    }
    onChange = event => this.setState({email: event.target.email});
    onChange = event => this.setState({name: event.target.name});
    onChange = event => this.setState({checked: event.target.checked});
    render(){
        const{value} = this.state;
        const{checked} = this.state;
        return(
            
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box direction="row" align="center" justify="center">
                        <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                            <TextInput ref = {this.ref} value={value} onChange={this.onChange} placeholder='이름을 입력하세요'/>
                            <TextInput ref = {this.ref} value={value} onChange={this.onChange} placeholder='이메일을 입력하세요'/>

                            {/* 비밀번호 입력 */}
                            <PasswordInput/>
                            
                            {/* 회원 유형 선택 */}
                            <CheckBox {...this.props} checked={checked} onChange={this.onChange} label="챌린저로 가입"/>
                            <CheckBox {...this.props} checked={checked} onChange={this.onChange} label="트레이너로 가입"/>

                            {/* 가입 API */}
                            <Google ></Google>
                            <Button label="네이버로 가입" onClick={()=>{}} {...this.props}></Button>
                            <Button label="카카오톡으로 가입" onClick={()=>{}} {...this.props}></Button>

                            {/* 완료 버튼 */}
                            {/*  */}
                            <Button label="완료" onClick={()=>{}} {...this.props}></Button>
                            {/* 취소는 루트메인화면으로 가기
                             */}
                            <Button label="취소" onClick={()=>{}} {...this.props}></Button>
                        </Box>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
           
        )
    }
}
export default SignUp;
