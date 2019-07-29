/*global daum*/
import React, { Component } from 'react'
import { 
    Box,
    Image,
    ResponsiveContext,
    Paragraph,
    Heading,
    Text,
    Button
 } from "grommet";
 import { Link } from 'react-router-dom'

// chat
import ChatMessage from '../components/ChatMaessage';
import ChatApp from './ChatApp';
import { default as Chatkit } from '@pusher/chatkit-server'

const chatkit = new Chatkit ({
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

const MenuA = (props) => {
    return(
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a 
        style={{ all: "inherit" }}
        {...props}
      />
    );
  } 

class CoachMatchingDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 'callum',
            currentView: 'ChatMessage',
            coach:[],
            gym:[]
        }
        this.changeView = this.changeView.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    componentDidMount(){
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
        fetch(`http://localhost:8080/coaches/find/${coachId}`)
        .then(res => res.json()
        ).then(res => {
            this.setState({
                coach:res
            })
           
        }).catch( error => {
            console.error(error);
            this.setState({
                error:true
            })
        })

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

    render(){
        // chat
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
                            </Box>

                        {/* left image + right text */}
                            <Box 
                            height="large" 
                            width="large"
                            direction="row"
                            align="start"
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
                                </Box>
                            </Box>
                           
                        {/* SNS */}
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
                                height="medium" 
                                width="80%"
                                direction="row"
                                align="start"
                                margin="xlarge"
                            >
                                <Box width="xlarge" >
                                    <div id="map" style={style_1}/>
                                </Box>
                                <Box align="center" width="xlarge" margin="large"> 
                                    <Text size="large">위치</Text>
                                    <Box margin="large">
                                        {this.state.gym.gymLoc}
                                    </Box>
                                </Box>
                            </Box> */}

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