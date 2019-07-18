import React, { Component } from 'react'
import FooBar from '../components/FooBar'
import NavBar from './NavBar'

import {
    Box,
    Button,
    Heading,
    Image,
    ResponsiveContext,
    Grid,
    Clock
  } from 'grommet';

import CoachPhoto from '../assets/coach_photo.png'

  

class CoachMatching extends Component {
   
    render(){
        return(
            <ResponsiveContext.Consumer>
            {size => (

            <Box direction="row" align="center" justify="center">
                <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                <Box overflow="hidden" width='98%' height="large" >
                {/* <Image fit="cover" src="  https://usathss.files.wordpress.com/2018/03/usatoday-personal-trainer.jpg?w=1000&h=429&crop=1"/> */}
                <Image fit="cover" src={CoachPhoto}/>
                </Box>
             
                {/* <Box overflow="hidden" width='98%' height="large" >
                    <Carousel fill>
                        <Image fit="cover" src="https://content.nike.com/content/dam/one-nike/en_us/season-2016-su/Running/NRC_Hub_Refresh/TrainingPlans/Hub/TrainingHub_D01.jpg.transform/full-screen/TrainingHub_D01.jpg"/>
                        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg"/>
                    </Carousel>
                </Box> */}
           
                <Box width='80%'>
                    <br/>
                    <br/>
                <Box align="center">
                    <Heading level="1">코치 추천</Heading>
                <br/>
                    <Clock type="digital" />
                <br/>
                    <Button primary color="#111111" label="더보기" onClick={() => {}}/>
                <br/>
                <br/>
                </Box>
              
                <Grid columns={{count: 3, size: "auto"}} gap="large">
                    <Box height="small" width='40' border>
                    </Box>
                    <Box height="small" width='40' border>
                    </Box>
                    <Box height="small" width='40' border>
                    </Box>
                </Grid>
                <br/>
                <Grid columns={{count: 3, size: "auto"}} gap="large">
                    <Box height="medium" width='60' border>
                    </Box>
                    <Box height="medium" width='60' border>
                    </Box>
                    <Box height="medium" width='60' border>
                    </Box>
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
              </Box>
            
                </Box>
            </Box>


            )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default CoachMatching