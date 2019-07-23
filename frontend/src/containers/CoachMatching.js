import React, { Component } from 'react'

import { Add } from "grommet-icons";
import {
    Box,
    Button,
    Heading,
    Image,
    ResponsiveContext,
    Grid
  } from 'grommet';

import CoachPhoto from '../assets/match_main.jpg'
import CoachMatchingDetail from './CoachMatchingDetail'

const MenuA = (props) => {
    return(
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a 
        style={{ all: "inherit" }}
        {...props}
      />
    );
  } 

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
                    <Box direction="row" align="center" justify="center">
                    <Box flex align="center" justify="center" overflow={{ vertical: 'hidden' }}>
                    <Box overflow="hidden" width='98%' height="large" >              
                        <Image fit="cover" src={CoachPhoto}/>
                    </Box>
            
                    <Box width='80%'>
                    <Box align="center">
                        <Heading level="1">코치 추천</Heading>
                    </Box>

                    <div>
                        {this.state.coaches.slice( 0,
                            this.state.visible).map((coach, index)=> {
                                return (
                                        <Grid key={coach.coachId}>
                                            <a href="/CoachMatchingDetail">
                                            <Box columns= {{count: 2}} height="medium" width='medium' margin="xlarge">
                                                <Image src="https://placeimg.com/300/200"/>
                                                {/* <Image src={coach.coachPhoto}/> */}
                                                <p>{coach.coachName}</p>
                                                <p>{coach.coachLoc}</p>
                                            </Box>
                                            </a>
                                        </Grid> 
                                );
                            })}
                    </div>

                    {this.state.visible < this.state.coaches.length &&
                      <Button primary color="#111111" icon={<Add/>} onClick={this.loadMore} type="button" className="load-more">Load more</Button>}
                    </Box>
                        </Box>
                    </Box>
            )}
            </ResponsiveContext.Consumer>
        );
    }
}

export default CoachMatching