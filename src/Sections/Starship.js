import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";
import {StarshipsCards} from "../Components/Cards/StarshipsCards";


class Starship extends Component{
state = {
    originalCard :[],
    renderCard : []
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
                return <StarshipsCards  name={val.name} height={val.height} mass={val.mass} 
                hairColor={val.hair_color} skinColor={val.skin_color} eyeColor={val.eye_color} birthYear={val.birth_year} gender={val.gender}  />
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
`;