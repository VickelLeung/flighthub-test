import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

import {PlanetCards} from "../Components/Cards/PlanetCards"

class Planet extends Component{
state = {
    originalCard :[]
}

componentDidMount =()=>{

    axios.get("https://swapi.co/api/planets")
    .then((res)=> { 
        console.log("res: "+ res.data.results[2])
        this.setState({originalCard: res.data.results})} );
}

   render(){
    return(
        <Wrapper>
        <Title>Planet</Title>

        <PlanetContainer>
            {this.state.originalCard.map((val)=>{
                return <PlanetCards  name={val.name} rotationPeriod={val.rotation_period} orbitalPeriod={val.orbital_period} 
                diameter={val.diameter} climate={val.climate} gravity={val.gravity} terrain={val.terrain} surfaceWater={val.surface_water} population = {val.population}  />
            })}  
        </PlanetContainer>
        </Wrapper>
    )
    }
}

export {Planet}

const Wrapper = styled.div`
background: #DCDCDC;
`;

const Title = styled.h1`
background: linear-gradient(0deg, rgba(124,123,123,0) 0%, rgba(68,0,149,1) 100%, rgba(0,255,117,1) 100%, rgba(129,129,129,0.5872724089635855) 100%);
padding: 5%;
`;

const PlanetContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;