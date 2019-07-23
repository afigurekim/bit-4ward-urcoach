import React, { Component } from 'react'
import { Add } from "grommet-icons";
import {
    Box,
    Button,
    Heading,
    Image,
    ResponsiveContext,
    Grid,
    Text,
    Carousel,
    TextInput
  } from 'grommet';

//  const [value, setValue] = React.useState('');

 

class GymMatching extends Component {
    constructor(props){
        super(props);
        this.state = {
         
        };
        
    }
    
    componentDidMount(){
       fetch("http://localhost:8080/gyms/search")
        .then( res => res.json()
        ).then( res => {
            this.setState({
              
            })
        }).catch( error => {
            console.error(error);
            this.setState({
                error: true
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
                    </Box>

                    {/* 검색창 */}
                    <Box pad="large">
                        <TextInput 
                             placeholder="현재 지역을 입력해 주세요( 종로구 )"
                            // value={value}
                            // onChange={event => setValue(event.target.value)}
                        />
                        <Button type="submit" primary label="검색"/>
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