/*global daum*/
import React, { Component } from 'react'
import { 
    Box,
    Image,
    ResponsiveContext,
    Paragraph,
<<<<<<< HEAD
    Heading
 } from "grommet";
=======
    Heading,
    Text,
    Button
 } from "grommet";
 import { Link } from 'react-router-dom'
>>>>>>> origin/YJ

// chat
import ChatMessage from '../components/ChatMaessage';
import ChatApp from './ChatApp';
import { default as Chatkit } from '@pusher/chatkit-server'
<<<<<<< HEAD
import axios from 'axios';

=======
>>>>>>> origin/YJ

const chatkit = new Chatkit ({
    instanceLocator: "v1:us1:e55ce926-ac88-4558-91e5-00767d8792c6",
    key: "ba8f3f02-dd0e-4ec7-b27a-ef4fbe188f88:Q+hfapQQTfjwuJTqsfFgm5LLgE78RvBnNKM6VX8Bh/s="
  })

  const style_1 = {
      width:"100%",
      height:"350px"
  }

<<<<<<< HEAD
  
=======
>>>>>>> origin/YJ
  const style_2 = {
    width:"150px",
    textalign:"center",
    // padding:"6px"
}

<<<<<<< HEAD
  
=======
const MenuA = (props) => {
    return(
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a 
        style={{ all: "inherit" }}
        {...props}
      />
    );
  } 

>>>>>>> origin/YJ
class CoachMatchingDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 'callum',
            currentView: 'ChatMessage',
<<<<<<< HEAD
            coach:[]
=======
            coach:[],
            gym:[]
>>>>>>> origin/YJ
        }
        this.changeView = this.changeView.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    componentDidMount(){
<<<<<<< HEAD

        const kakao = window.kakao;
        const mapContiner = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(33.450701,126.570667),
            level:3
        }
        let map = new kakao.maps.Map(mapContiner,mapOption);
        let geocoder  = new kakao.maps.services.Geocoder();
        geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status){

            if(status === daum.maps.services.Status.OK){
                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                let infowindow = new kakao.maps.InfoWindow({
                    content:'<div style={style_2}>fit194</div>'
                });
                infowindow.open(map,marker);
                map.setCenter(coords);
            }

        });
        //fetch

        const { coachId }  = this.props.match.params

=======
        // const kakao = window.kakao;
        // const mapContiner = document.getElementById('map'),
        // mapOption = {
        //     center: new kakao.maps.LatLng(33.450701,126.570667),
        //     level:3
        // }
        // let map = new kakao.maps.Map(mapContiner,mapOption);
        // let geocoder  = new kakao.maps.services.Geocoder();
        // geocoder.addressSearch('서울특별시 종로구 종로 113', function(result, status){

        //     if(status === daum.maps.services.Status.OK){
        //         let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        //         let marker = new kakao.maps.Marker({
        //             map: map,
        //             position: coords
        //         });
        //         let infowindow = new kakao.maps.InfoWindow({
        //             content:'<div style={style_2}> xxx 피트니스 </div>'
        //         });
        //         infowindow.open(map,marker);
        //         map.setCenter(coords);
        //     }
        // });

        //fetch:coach
        const { coachId }  = this.props.match.params
>>>>>>> origin/YJ
        fetch(`http://localhost:8080/coaches/find/${coachId}`)
        .then(res => res.json()
        ).then(res => {
            this.setState({
                coach:res
            })
<<<<<<< HEAD
            
=======
           
>>>>>>> origin/YJ
        }).catch( error => {
            console.error(error);
            this.setState({
                error:true
            })
        })
<<<<<<< HEAD
      
=======

        // fetch:gym
         const { gymId }  = this.props.match.params
         fetch(`http://localhost:8080/gyms/find/${gymId}`)
         .then(res => res.json()
         ).then(res => {
             this.setState({
                 gym:res
             })
            
         }).catch( error => {
             console.error(error);
             this.setState({
                 error:true
             })
         })
>>>>>>> origin/YJ
    }
    createUser() {
        chatkit.createUser({
            id: 'userId',
            name: 'Some name'
          })
            .then(() => {
              console.log('User created successfully');
            }).catch((err) => {
              console.log(err);
            });
    }
    changeView(view) {
        this.setState({
            currentView: view
        })
    }
<<<<<<< HEAD
    render(){
=======

    render(){
        // chat
>>>>>>> origin/YJ
        let view ='';
        if (this.state.currentView === "ChatMessage") {
            view = <ChatMessage changeView = {this.changeView}/>
        } else if (this.state.currentView === "chatApp") {
          view = <ChatApp id={this.state.id}/>
<<<<<<< HEAD
       }
=======
        }

>>>>>>> origin/YJ
        return (
                <ResponsiveContext.Consumer>
                {size => ( 
                    <Box align="center" direction="column">
                        
                        {/* full image */}
                            <Box height="large" width="full">
                                <Image fit="cover" src="https://placeimg.com/3000/1500/any"/>
                            </Box>

<<<<<<< HEAD
                        {/* center text */}
                            <Box 
                            pad="xlarge" 
                            align="center"
                            >
                                    <div>
                                        <Heading level={2} size="large">코치소개</Heading>
                                            <Paragraph size="large">
                                                {this.state.coach.coachId}
                                                {this.state.coach.coachInfo}
                                            </Paragraph>
                                    </div>
=======
                            <Box margin="large">
                                <Text level={2} size="xlarge">
                                    안녕하세요!  "{this.state.coach.coachName}" 입니다.
                                </Text>
                            </Box>

                        {/* center text */}
                            <Box 
                                pad="small" 
                                align="center"
                            >
                                <Heading level={2} size="large">코치소개</Heading>
                                <Button></Button>
                                <Paragraph size="large">
                                    {this.state.coach.coachInfo}
                                </Paragraph>
>>>>>>> origin/YJ
                            </Box>

                        {/* left image + right text */}
                            <Box 
                            height="large" 
                            width="large"
                            direction="row"
                            align="start"
<<<<<<< HEAD
                            >
                                <Box width="medium"  
                                    height="large" 
                                >
                                    <Image fit="cover"
                                        align="center"   
                                        height="large" 
                                        width="small"
                                        src="https://placeimg.com/500/1000/people"
                                    />
                                </Box>
                                <Box align="center" width="medium" margin="xlarge">
                                    Digital Healthcare Partners 는 정기적으로 디지털 헬스케어 분야의 유망한 초기 스타트업 들을 초청하여 무료로 자문해드리는 DHP Office Hour 를 가집니다
                                    DHP Office Hour 는 전적으로 파트너들의 심사 및 초청에 의해서 이뤄지며, 
                                    초청 받은 스타트업은 Digital Healthcare Partners 의 창업/의학 자문 및 네트워킹, 투자 연계 등의 지원을 받게 됩니다. 
                                    DHP Office Hour 는 시리즈 A 투자 이전의 스타트업에 한해 상시 지원 가능하며, 선정된 팀에는 별도의 연락을 드립니다.
                                    지원을 원하시는 스타트업은 (공개 가능한 수준의) 사업계획서를 dhp@dhpartners.io 로 보내주시기 바랍니다.  
                                    세상을 바꿀 혁신적인 디지털 헬스케어 스타트업의 많은 지원을 기다립니다.
=======
                            margin="large"
                            >
                                <Box 
                                    // width="medium"  
                                    // height="medium" 
                                >
                                    <Image fit="cover"
                                        align="center"   
                                        width="medium"
                                        height="medium" 
                                        src="https://placeimg.com/700/700/people"
                                    />
                                </Box>
                                <Box align="center" width="medium" margin="xlarge">
                                    <Heading level={2} size="medium" >자격 및 경력</Heading>
                                    <Text margin="small">
                                         {this.state.coach.coachResume1}
                                    </Text>
                                    <Text margin="small">
                                         {this.state.coach.coachResume2}
                                    </Text>
                                    <Text margin="small">
                                         {this.state.coach.coachResume3}
                                    </Text>
                                    <Text margin="small">
                                         {this.state.coach.coachResume4}
                                    </Text>
                                    <Text margin="small">
                                         {this.state.coach.coachResume5}
                                    </Text>
>>>>>>> origin/YJ
                                </Box>
                            </Box>
                           
                        {/* SNS */}
<<<<<<< HEAD
                            <Box border={{  size: "xlarge", color:"white" }} justify="center" align="center" background="brand" pad={{vertical:"large"}} margin="xlarge" fill>
                                <Heading> INSTAGRAM </Heading>
                            </Box>


                        {/* PT center */}
                            <a href="/GymMatchingDetail">
                                <Box
                                    direction="row"
                                    >
                                    <Box pad="medium" background="dark-3" >피트니스 사진</Box>
                                    <Box pad="medium" background="light-3">피트니스 정보</Box>
                                </Box>
                            </a>
                         
                          
                        {/* map */}
                            <Box 
=======
                        <Box margin="small">
                            <Box border={{  size: "xlarge", color:"white" }} justify="center" align="center" background="brand" pad={{vertical:"large"}}  fill>
                                     <a href={this.state.coach.coachLink}>
                                        <Heading> 
                                            {this.state.coach.coachLink} 
                                        </Heading>
                                     </a>
                            </Box>
                        </Box>
                          

                        {/* PT center */}
                         <Box margin="medium">
                            <Heading level={2} size="medium">P.T 이용센터</Heading>
                         </Box>
                          <Box margin="medium">
                            <Link to="/GymMatchingDetail">
                                <Box direction="row">
                                    <Box pad="medium" background="dark-3" >{this.state.gym.gymName}</Box>
                                    <Box pad="medium" background="light-3">
                                        <Image src="https://placeimg.com/500/300/any"/>
                                    </Box>
                                </Box>
                            </Link>
                          </Box>
                      
                            
                         
                        {/* map */}
                            {/* <Box 
>>>>>>> origin/YJ
                                height="medium" 
                                width="80%"
                                direction="row"
                                align="start"
                                margin="xlarge"
                            >
                                <Box width="xlarge" >
                                    <div id="map" style={style_1}/>
                                </Box>
<<<<<<< HEAD
                                <Box align="center" width="xlarge" margin="large"> STORE l 35-37, Bongdeok-ro 6-gil, Nam-gu, Daegu</Box>
                            </Box>
=======
                                <Box align="center" width="xlarge" margin="large"> 
                                    <Text size="large">위치</Text>
                                    <Box margin="large">
                                        {this.state.gym.gymLoc}
                                    </Box>
                                </Box>
                            </Box> */}
>>>>>>> origin/YJ

                        {/* chat */}
                            <Box align="end">
                                <div className="App">
                                    {view}
                                </div>
                            </Box>
                            <br/>
                            <br/>
                            <br/>
                    </Box>
                )}
                </ResponsiveContext.Consumer>
        );
        
    }
}

export default CoachMatchingDetail