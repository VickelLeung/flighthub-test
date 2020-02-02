import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";
import {StarshipsCards} from "../Components/Cards/StarshipsCards";


class Starship extends Component{
state = {
    originalCard :[]
}

componentDidMount =()=>{

    axios.get("https://swapi.co/api/starships")
    .then((res)=> { 
        console.log("res: "+ res.data.results[2])
        this.setState({originalCard: res.data.results})});
}

   render(){
    return(
        <Wrapper>
        <Title>Starships</Title>

        <StarshipContainer>
            {this.state.originalCard.map((val)=>{
                return <StarshipsCards  name={val.name} model={val.model} manufacturer={val.manufacturer} 
                cost_in_credits={val.cost_in_credits} length={val.length} max_atmosphering_speed={val.max_atmosphering_speed} 
                crew={val.crew} passengers={val.passengers} cargo_capacity={val.cargo_capacity} 
                consumables={val.consumables} hyperdrive_rating={val.hyperdrive_rating} 
                MGLT={val.MGLT} starship_class={val.starship_class}
                />
            })}  
        </StarshipContainer>
        </Wrapper>
    )
    }
}

export {Starship}

const Wrapper = styled.div`
background: #DCDCDC;
`;

const Title = styled.h1`
background: linear-gradient(0deg, rgba(124,123,123,0) 0%, rgba(1,0,255,1) 100%, rgba(129,129,129,0.5872724089635855) 100%);
padding: 5%;
`;

const StarshipContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;