<<<<<<< HEAD
import React,{ Component } from 'react'
import { Box } from 'grommet';

class GymMatching extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Box></Box>
        )
    }
}
export default GymMatching
=======
import React, { Component } from 'react'
import {
    Box,
    Image,
    ResponsiveContext,
    Paragraph,
    Heading,
    Text
} from "grommet";


const style_1 = {
    width:"100%",
    height:"350px"
}

const style_2 = {
  width:"100%",
  textalign:"center",
  padding:"6px"
}

class GymMatchingDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gym: []
        }
    }
    componentDidMount() {
        // // map
        // const kakao = window.kakao;
        // const mapContiner = document.getElementById('map'),
        // mapOption = {
        //     center: new kakao.maps.LatLng(33.450701,126.570667),
        //     level:3
        // }
        // let map = new kakao.maps.Map(mapContiner,mapOption);
        // let geocoder  = new kakao.maps.services.Geocoder();
        // geocoder.addressSearch('서울특별시 종로구 종로 113', function(result, status){

        //     if(status === kakao.maps.services.Status.OK){
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

        //fetch
        const { gymId } = this.props.match.params
        fetch(`http://localhost:8080/gyms/find/${gymId}`)
            .then(res => res.json()
            ).then(res => {
                this.setState({
                    gym: res
                })
                console.log("gym : " + this.state.gym.gymId)
            }).catch(error => {
                console.log(error);
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <ResponsiveContext.Consumer>
                { size => (
                    <Box>
                        <Box key={this.state.gym.gymId}>
                            {/* full image */}
                            <Box height="large" width="full">
                                <Image fit="cover" src="https://placeimg.com/3000/1500/place" />
                            </Box>

                            <Box>
                            {this.state.gym.gymId}
                            {this.state.gym.gymName}
                            </Box>

                            {/* center */}
                            <Box
                                pad="small"
                                align="center"
                            >
                               
                               <Box>
                                    <Heading level={2} size="large">근처 피트니스매칭</Heading>
                                    <Box>
                                        <Text>
                                            이용가격
                                            {this.state.gym.gymPrice}
                                        </Text>
                                    </Box>
                                    <Box margin="large">
                                         이용정보 
                                        <Text>
                                            {this.state.gym.gymInfo1}
                                        </Text>
                                        <Text>
                                            {this.state.gym.gymInfo2}
                                        </Text>
                                        <Text>
                                            {this.state.gym.gymInfo3}
                                        </Text>
                                    </Box>
                               </Box>

                               <Box margin="large">
                                   운영시간
                                    <Text>
                                        {this.state.gym.gymTime}
                                    </Text>
                               </Box>

                               <Box margin="large">
                                   소개
                                    <Text>
                                        {this.state.gym.gymInfo}
                                    </Text>
                               </Box>

                               {/* map */}

                               <Box>
                                   위치
                                   <Text>
                                       {this.state.gym.gymLoc}
                                   </Text>
                               </Box>


                                <Box 
                                    height="medium" 
                                    width="10%"
                                    direction="row"
                                    align="start"
                                    margin="xlarge"
                                >
                                    <Box width="medium" >
                                        <Box id="map" style={style_1}/>
                                    </Box>
                                    <Box align="center" width="xlarge" margin="large"> </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default GymMatchingDetail
>>>>>>> origin/YJ
