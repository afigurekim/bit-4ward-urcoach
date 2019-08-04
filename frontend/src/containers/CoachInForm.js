import React, { Component } from 'react'
import {
    Box,
    Button,
    Image,
    ResponsiveContext,
    Text,
    Form,
    FormField
} from 'grommet';
import axios from 'axios';
import NullPhoto from '../assets/null_photo.png';
class CoachInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coachId: '',
            coachName: '',
            coachInfo: '',
            coachLoc: '',
            coachLink: '',
            coachResume1: '',
            coachResume2: '',
            coachResume3: '',
            coachResume4: '',
            coachResume5: '',
            newPhoto: '',
            coachPhoto1: '',
            gymName: '',
            gymInfo: '',
            gymInfo1: '',
            gymInfo2: '',
            gymInfo3: '',
            gymPrice: '',
            gymTime: '',
            gymLoc: '',
            gymPhoto: '',
            gymId: ''

        }
    }
    changePhoto = (e) => {
        let self = this
        this.setState({ newPhoto: e.target.files[0] })
        let data = new FormData()
        data.append("file", e.target.files[0])
        let fileReader = new FileReader()
        fileReader.readAsDataURL(e.target.files[0])
        fileReader.onload = function (e) {
            e.preventDefault()
            const headers = { "Content-Type": "multipart/form-data" }
            axios.post("http://localhost:8080/upload", data, { headers: headers })
                .then(res => {
                    alert("사진이 업로드 되었습니다")
                    document.getElementById("photoThumb").src = e.target.result
                    self.setState({ coachPhoto1: res.data })
                })
                .catch(e => { alert("업로드 실패") })
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // 코치 input 
    // updateCoach = (gymId) => (e) => {
    //     e.preventDefault();
    //     console.log("updateCoach 로 접근")
    //     this.insertGym();
    //     let memberId = sessionStorage.getItem("memberId")
        
    //     // call
    //     let data = {
    //         coachName: this.state.coachName,
    //         coachInfo: this.state.coachInfo,
    //         coachLoc: this.state.coachLoc,
    //         coachLink: this.state.coachLink,
    //         coachResume1: this.state.coachResume1,
    //         coachResume2: this.state.coachResume2,
    //         coachResume3: this.state.coachResume3,
    //         coachResume4: this.state.coachResume4,
    //         coachResume5: this.state.coachResume5,
    //         coachPhoto1: this.state.coachPhoto1
    //     }
    //     let headers = {
    //         'Content-type': 'application/json',
    //         'Authorization': 'JWT fefege...'
    //     }
    //     axios.post(`http://localhost:8080/coaches/insert/${memberId}/${gymId}`, JSON.stringify(data), { headers: headers })
    //         .then(res => {
    //             alert("코치 입력성공")
    //             console.log(res.data)
    //             sessionStorage.setItem("coachId", res.data.coachId)
                
    //             // this.props.history.push('/')
    //         })
    //         .catch(e => { alert("coach 작성실패") })
    // }

    // Gym 값 넣는 거
    insertGym = (e) => {
        console.log("insertGym로 접근")
        let self = this
        let data = {
            gymInfo: this.state.gymInfo,
            gymInfo1: this.state.gymInfo1,
            gymInfo2: this.state.gymInfo2,
            gymInfo3: this.state.gymInfo3,
            gymLoc: this.state.gymLoc,
            gymName: this.state.gymName,
            gymPhoto: this.state.gymPhoto,
            gymPrice: this.state.gymPrice
        }
        let headers = {
            'Content-type': 'application/json',
            'Authorization': 'JWT fefege...'
        }
        axios.post(`http://localhost:8080/gyms/insert`, JSON.stringify(data), { headers: headers })
            .then( res => {
            alert("Gym 입력 성공")

            //coach input
            let gymId = res.data.gymId
            // console.log("gymId : "+gymId)
            // self.updateCoach(gymId)
            let memberId = sessionStorage.getItem("memberId")

            let data = {
                coachName: this.state.coachName,
                coachInfo: this.state.coachInfo,
                coachLoc: this.state.coachLoc,
                coachLink: this.state.coachLink,
                coachResume1: this.state.coachResume1,
                coachResume2: this.state.coachResume2,
                coachResume3: this.state.coachResume3,
                coachResume4: this.state.coachResume4,
                coachResume5: this.state.coachResume5,
                coachPhoto1: this.state.coachPhoto1
            }
            let headers = {
                'Content-type': 'application/json',
                'Authorization': 'JWT fefege...'
            }
            axios.post(`http://localhost:8080/coaches/insert/${memberId}/${gymId}`, JSON.stringify(data), { headers: headers })
                .then(res => {
                    alert("코치 입력성공")
                    console.log(res.data)
                    sessionStorage.setItem("coachId", res.data.coachId)
                    this.props.history.push('/')
                })
                .catch(e => { alert("coach 작성실패") })    
            })
            .catch(e => { alert("Gym 작성실패") })
    }

    
    render() {
        const coachThumb = NullPhoto
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box align="center" justify="center" margin="xlarge">
                        <Text weight="bold" size="70px" >코치 페이지</Text>
                        <Box
                            margin="large"
                            width="80%"
                            style={{ color: "black" }}
                            border={{ color: 'brand', size: 'medium' }}
                            round="small"
                        >
                            <Box direction="row" margin="medium" align="center" wrap>
                                <Box width="medium">
                                    <Form>
                                        <Box align="center" justify="center" height="medium" round="small" border={{ size: "medium", style: "dashed" }} margin="large">
                                            <Box pad="medium">
                                                <Image fit="contain" src={coachThumb} alt="Coach Photo" id="photoThumb" />
                                                <Text size="medium" weight="bold" textAlign="center">사진 등록</Text>
                                                <Text size="small" textAlign="center">jpg, png, gif</Text>
                                                <Text size="small" textAlign="center">5MB 이내로</Text>
                                                <Box align="center" justify="center">
                                                    <input id="uploadButton" type="file" accept="image/*" onChange={this.changePhoto} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Form>
                                </Box>
                                
                                <Box width="65%" alignContent="center">
                                    <Form onSubmit={this.insertGym}>
                                        <Box width="100%">
                                            <Box margin={{ bottom: "medium " }}>
                                                <FormField
                                                    name="coachName"
                                                    label="이름"
                                                    value={this.state.coachName}
                                                    onChange={this.handleChange}
                                                />
                                            </Box>
                                            <Box margin={{ bottom: "medium " }}>
                                                <FormField
                                                    name="coachLoc"
                                                    label="위치"
                                                    value={this.state.coachLoc}
                                                    onChange={this.handleChange}
                                                />
                                            </Box>
                                            <Box margin={{ bottom: "medium " }}>
                                                <FormField
                                                    name="coachInfo"
                                                    label="코치소개"
                                                    value={this.state.coachInfo}
                                                    onChange={this.handleChange}
                                                />
                                            </Box>
                                            <Box>
                                                <Box margin={{ bottom: "medium " }}>
                                                    <FormField
                                                        name="coachLink"
                                                        label="SNS"
                                                        value={this.state.coachLink}
                                                        onChange={this.handleChange}
                                                    />
                                                </Box>
                                                <Box margin={{ bottom: "medium " }}>
                                                    <FormField
                                                        name="coachResume1"
                                                        label="자격 및 경력"
                                                        value={this.state.coachResume1}
                                                        placeholder="경력사항 1"
                                                        onChange={this.handleChange}
                                                    />
                                                    <FormField
                                                        name="coachResume2"
                                                        value={this.state.coachResume2}
                                                        placeholder="경력사항 2"
                                                        onChange={this.handleChange}
                                                    />
                                                    <FormField
                                                        name="coachResume3"
                                                        value={this.state.coachResume3}
                                                        placeholder="경력사항 3"
                                                        onChange={this.handleChange}
                                                    />
                                                    <FormField
                                                        name="coachResume4"
                                                        value={this.state.coachResume4}
                                                        placeholder="경력사항 4"
                                                        onChange={this.handleChange}
                                                    />
                                                    <FormField
                                                        name="coachResume5"
                                                        value={this.state.coachResume5}
                                                        placeholder="경력사항 5"
                                                        onChange={this.handleChange}
                                                    />
                                                </Box>
                                                <Box margin={{ bottom: "medium " }}>
                                                    <FormField
                                                        name="gymName"
                                                        label="헬스장명"
                                                        value={this.state.gymName}
                                                        onChange={this.handleChange}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box width="80%" align="center" pad="large">
                                            <Button
                                                label="게시하기"
                                                type="submit"
                                            />
                                        </Box>
                                    </Form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}

export default CoachInForm
