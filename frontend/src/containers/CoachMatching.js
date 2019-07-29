import React, { Component } from 'react'
import { Add } from "grommet-icons";
import {
    Box,
    Button,
    Heading,
    Image,
    ResponsiveContext,
    Text,
    Stack
  } from 'grommet';
import { Link } from 'react-router-dom'
import CoachPhoto from '../assets/match_main.jpg'



class CoachMatching extends Component {

    constructor(props){
        super(props);
        this.state = {
            coaches: [],
            visible: 6,
            error: false
        };
        this.loadMore = this.loadMore.bind(this)
    }

    loadMore(){
        this.setState((prev) => {
            return {visible:prev.visible + 4};
        })
    }

    componentDidMount(){
       fetch("http://localhost:8080/coaches/find")
        .then( res => res.json()
        ).then( res => {
            this.setState({
                coaches:res
            })
            //coaches 11번째의 gymId 10 번째 출력
            console.log("coaches : "+ this.state.coaches[0].gymId.gymId)
        }).catch( error => { 
            console.error(error);
            this.setState({
                error: true
            })
        })
    }
   
    render(){
        return(
            <ResponsiveContext.Consumer>
            { size => (
                        <Box direction="row" align="center" justify="center" >
                        <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                        <Box overflow="hidden" width="98%" height="large" >              
                        <Stack anchor = "topright" margin={{ vertical:'0'}}>
                          <Image fit="cover" src={CoachPhoto} width="100%" />
                          <Text color="#000000">최고의 코치를 만나보세요.</Text>
                        </Stack>
                            
                        </Box>
                
                        <Box width="80%" align="center" alignContent="center">
                        
                        <Box align="center" margin="large">
                            <Heading level="1">코치 추천</Heading>
                        </Box>

                        <Box>
                            <Button
                                    label="코치 페이지 수정"
                                />
                        </Box>

                        <Box fill="horizontal" align="center" alignContent="center" margin={{ left: "12%" , top:"10%" }}>
                        <Box direction="row" wrap="true" gap="small">
                            {this.state.coaches.slice( 0,
                                    this.state.visible).map((coach) => {
                                       
                                        return (
                                                    <Box 
                                                        direction="column"
                                                        width="medium"
                                                        height="medium"
                                                        // border={{ color: 'brand', size: 'medium' }}
                                                        // round="small"
                                                        align="center"
                                                        margin={{ bottom: "small" }}
                                                        key={coach.coachId}
                                                    >
                                                        <Link to = {`/CoachMatchingDetail/${coach.coachId}/${coach.gymId.gymId}`} style={{ color: "black", textDecoration: "none" }} >
                                                            <Box height="medium" width="medium" pad="small">
                                                                <Image src="https://placeimg.com/300/200"/>
                                                                <Heading level="4" textAlign="center">{coach.coachId}</Heading>
                                                                <Text textAlign="center" margin="xsmall">{coach.coachName}</Text>
                                                                <Text textAlign="center" margin="xsmall">{coach.coachLoc}</Text>
                                                            </Box>
                                                        </Link>
                                                    </Box> 
                                        );
                                    })}
                        </Box>
                        </Box>
                        <Box >
                          { this.state.visible < this.state.coaches.length &&
                                <Button primary color="#111111" icon={<Add/>} onClick={this.loadMore} type="button" className="load-more">Load more</Button> }
                       
                        </Box>
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