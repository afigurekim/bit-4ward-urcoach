import React, { Component } from 'react'

import {
    Box,
    Button,
    Heading,
    Image,
    ResponsiveContext,
    Text,
    Carousel,
    TextInput
  } from 'grommet';


class GymMatching extends Component {
    constructor(props){
        super(props);
        this.state = {
             keyword:'',
             gyms:[],
             error: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = e => {
        this.setState({
            keyword:e.target.value
        })
    }
    onSubmit(){
        alert("클릭");
        const search = {
            'keyword':this.state.keyword
        }
        fetch("http://localhost:8080/gyms/search/"+this.state.keyword)
        .then((res) => res.json()
        
        ).then(res => {
            
               this.setState({
                gyms:res
            })
            
        }).catch( error => {
            console.error(error);
            this.setState({
                error:true
         })
      })
    }

    render(){
                    
        return (
            <ResponsiveContext.Consumer>
            { size => (
                    <Box direction="row" align="center" justify="center">
                    <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                    <Box overflow="hidden" width='full' height="full" >              
                        {/* <Image fit="cover" src="https://placeimg.com/3000/1500"/> */}
                        <Box height="full" width="full" overflow="hidden">
                        <Carousel fill>
                            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                        </Carousel>
                        </Box>
                    </Box>
            
                    <Box width='80%'>
                    <Box align="center">
                        <Heading level="1">주변 피트니스 센터</Heading>
                        <Text>종로구 종로 2가</Text>
                        {/* <Text margin="large">지역을 검색해주세요</Text> */}
                    </Box>

                    {/* 검색창 */}
                    <Box pad="large">
                        <TextInput 
                             placeholder="현재 지역을 입력해 주세요( 종로구 )"
                             type="text"
                             name="keyword"
                             value={this.state.keyword}
                             onChange={this.handleChange}
                        />
                        <Button type="submit" onClick={this.onSubmit.bind(this)} primary label="검색"/>
                    </Box>

                    <Box>
                        {this.state.gyms.map( gym => {
                                return(

                                       <Box key={gym.gymId}>
                                            <Image src="https://placeimg.com/300/200"/>
                                                <Box>{gym.gymName}</Box> 
                                                <Box>{gym.gymLoc}</Box>  
                                        </Box>
                                )
                            })}
                    </Box>

                    </Box>
                        </Box>
                    </Box>
            )}
            </ResponsiveContext.Consumer>

        )
        
    }
}
export default GymMatching