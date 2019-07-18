import React, {Component} from 'react';
import {ResponsiveContext, Box, TextInput, Button, CheckBox} from 'grommet';
import {Google} from 'grommet-icons';


class Login extends Component{
    state = {value: ""};
    ref = React.createRef();
    constructor(props){
        super(props);
        this.state = {checked: !!props.checked};
    }
    onChange = event => this.setState({value: event.target.value});
    onChange = event => this.setState({checked: event.target.checked});
    render(){
        const{value} = this.state;
        const{checked} = this.state;
        return(
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box direction="row" align="center" justify="center">
                        <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                                                                    
                            <TextInput ref = {this.ref} value={value} onChange={this.onChange} placeholder='이메일을 입력하세요'/>
                            <TextInput ref = {this.ref} value={value} onChange={this.onChange} placeholder='비밀번호를 입력하세요'/>
                            
                            {/* 가입 API */}
                            <Google ></Google>
                            <Button label="네이버로 로그인" onClick={()=>{}} {...this.props}></Button>
                            <Button label="카카오톡으로 로그인" onClick={()=>{}} {...this.props}></Button>

                            {/* 완료 버튼 */}
                            <Button label="로그인" onClick={()=>{}} {...this.props}></Button>
                        </Box>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
           
        )
    }
}
export default Login;
