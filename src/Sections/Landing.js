import React from 'react';
import styled from "styled-components";
import Logo from "../Images/star_wars_logo.png";
const Landing = () =>{
    return(
        <Wrapper>
               <Image src={Logo}/>
               
               <Description>
                    <Title>Welcome to the star wars database</Title>
                   This website is to provide all informations about star wars! 
                   <br />
                   Below you will find informations for all the people, planets and starships throughout the all the sega of star wars.
                </Description>
        </Wrapper>
    )
}

export {Landing};

const Wrapper = styled.div`
padding: 5%;
`;

const Title = styled.h2`
`;

const Description = styled.div`
border: 1px solid black;
color:white;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
margin: 0 2%;
padding: 3%;
font-size: 1.1em;
background: rgba(0,0,0, 0.8);
`;

const Image = styled.img`

top:0;
`
