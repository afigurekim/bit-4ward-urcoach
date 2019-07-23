/*global daum*/
import React, { Component } from 'react'
import { 
    Box,
    Image,
    ResponsiveContext,
    Paragraph,
    Heading,
    Grommet,
    grommet
 } from "grommet";

// chat
import ChatMessage from '../components/ChatMaessage';
import ChatApp from './ChatApp';
import { default as Chatkit } from '@pusher/chatkit-server'


const chatkit = new Chatkit({
    instanceLocator: "v1:us1:e55ce926-ac88-4558-91e5-00767d8792c6",
    key: "ba8f3f02-dd0e-4ec7-b27a-ef4fbe188f88:Q+hfapQQTfjwuJTqsfFgm5LLgE78RvBnNKM6VX8Bh/s="
  })

  const style_1 = {
      width:"100%",
      height:"350px"
  }

  
  const style_2 = {
    width:"150px",
    textalign:"center",
    // padding:"6px"
}
  
class CoachMatchingDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 'callum',
            currentView: 'ChatMessage'
        }
        this.changeView = this.changeView.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    componentDidMount(){
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
    }
    createUser() {
        chatkit.createUser({
            id: 'userId',
            name: 'Some name',
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
    render(){
        let view ='';
        if (this.state.currentView === "ChatMessage") {
            view = <ChatMessage changeView = {this.changeView}/>
        } else if (this.state.currentView === "chatApp") {
          view = <ChatApp id={this.state.id}/>
       }
        return (
                <ResponsiveContext.Consumer>
                {size => ( 
                    <Box align="center" direction="column">
                        
                        {/* full image */}
                            <Box height="large" width="full">
                                <Image fit="cover" src="https://placeimg.com/3000/1500/any"/>
                            </Box>

                        {/* center text */}
                            <Box 
                            pad="xlarge" 
                            align="center"
                            >
                                    <div>
                                        <Heading level={2} size="large">코치소개</Heading>
                                        {/* <Text size="xlarge">Text XLarge</Text> */}
                                        <Paragraph size="large">
                                        Paragraph - Large
                                        </Paragraph>
                                    </div>
                            </Box>

                        {/* left image + right text */}
                            <Box 
                            height="large" 
                            width="large"
                            direction="row"
                            align="start"
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
                                </Box>
                            </Box>
                           
                        {/* SNS */}
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
                                height="medium" 
                                width="80%"
                                direction="row"
                                align="start"
                                margin="xlarge"
                            >
                                <Box width="xlarge" >
                                    <div id="map" style={style_1}/>
                                </Box>
                                <Box align="center" width="xlarge" margin="large"> STORE l 35-37, Bongdeok-ro 6-gil, Nam-gu, Daegu</Box>
                            </Box>

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