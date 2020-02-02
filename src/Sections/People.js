import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {PersonCards} from "../Components/Cards/PersonCards"
import {Search} from "../Components/Search";

class People extends Component{
state = {
    originalCard :[],
    renderCard : []
}

componentDidMount =()=>{

    axios.get("https://swapi.co/api/people")
    .then((res)=> { 
        console.log("res: "+ res.data.results[2])
        this.setState({originalCard: res.data.results})});
    
}

   render(){
    return(
        <Wrapper>
        <Title>People</Title>
        <Search /> 
       
        <Separator />
        <SubTitle>List of person</SubTitle>
        <PersonContainer>
            {this.state.originalCard.map((val)=>{
                return <PersonCards  name={val.name} height={val.height} mass={val.mass} 
                hairColor={val.hair_color} skinColor={val.skin_color} eyeColor={val.eye_color} birthYear={val.birth_year} gender={val.gender}  />
            })} 
        </PersonContainer>
        
        </Wrapper>
    )
    }
}

export {People}

const Wrapper = styled.div`
background: #DCDCDC;
`;

const Title = styled.h1`
background: linear-gradient(0deg, rgba(124,123,123,0) 0%, rgba(0,149,79,1) 100%, rgba(0,255,117,1) 100%, rgba(129,129,129,0.5872724089635855) 100%);
padding: 5%;
`;

const PersonContainer = styled.div`
display:flex;
flex-wrap: wrap;
`;

const Separator = styled.div`
border-bottom: 2px solid black;
margin: 6% 4%;
`;

const SubTitle = styled.h2``;