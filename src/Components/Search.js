import React, {Component} from 'react';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import {PersonCards} from "../Components/Cards/PersonCards";

class Search extends Component{
    state={
        isDisplay:false,
        searchData:[]
    }

    Search=()=>{
        axios.get("https://swapi.co/api/people/?search="+ this.state.searchInput)
        .then((res)=> { 
          console.log("res: "+ res.data.results[0])
          this.setState({searchData: res.data.results, isDisplay: true})});
      }

   
    render(){    
    
    const {searchData} = this.state;
    
    return(<div>
            <SubTitle>Search a person through our database</SubTitle>
            <SearchContainer>
                <TextField onChange={(e)=>{this.setState({searchInput: e.target.value})}} id="outlined-basic" label="Search a person" variant="outlined" />
                <Button style={{margin:"2% 0"}} onClick={this.Search} variant="contained" color="primary">
                    Submit
                </Button>
            </SearchContainer>
            
    {this.state.isDisplay ? <ResultContainer>
            <h3>Here is the result for the person found: </h3>
            
            <PersonCards name={searchData[0].name} height={searchData[0].height} mass={searchData[0].mass} 
            hairColor={searchData[0].hair_color} skinColor={searchData[0].skin_color} eyeColor={searchData[0].eye_color}
            birthYear={searchData[0].birth_year} gender={searchData[0].gender} 
            /> 
        </ResultContainer>
        
        :null}

        </div>
    )
    }
}
// const {name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender} = props;

export {Search}

const SubTitle = styled.h2`

`;

const SearchContainer = styled.div`
display:flex;
flex-direction: column;
margin: 5% 10%;
`;

const ResultContainer = styled.div`
text-align:center;
margin: 0 15%;
`;