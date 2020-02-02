import React, {Component} from 'react';
import './App.css';
import Headroom from "react-headroom";
import styled from "styled-components";
import scrollToComponent from 'react-scroll-to-component';
import {Landing} from "./Sections/Landing";
import {People} from "./Sections/People";
import {Planet} from "./Sections/Planet";
import {Starship} from "./Sections/Starship";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import bgImg from "./Images/background_images.jpg";
import { Link, Element } from 'react-scroll'

class App extends Component {

  state = {
    currentTab: 0,

    searchInput: "",
    originalCard:[]
  }

  render(){

  return (
    
    <Wrapper >
    <MainWrapper>
        <Landing />
        <Element style={{
          position: 'relative',
          height: '70vh',
          overflow: 'scroll',
        }}>
          <Element name="firstInsideContainer" style={{
          }}>
             <section ref={(section) => { this.people = section; }}>
              <People />
            </section>
          </Element>

          <Element name="secondInsideContainer" style={{
           
          }}>
           <section ref={(section) => { this.planet = section; }}>
            <Planet />
          </section>
          </Element>
          <Element name="secondInsideContainer" style={{
          
          }}>
            <section ref={(section) => { this.starship = section; }}>
            <Starship />
          </section>
          </Element>
        </Element>

      </MainWrapper>
    </Wrapper>
  );
  }
}

export default App;

const Wrapper = styled.div`
  text-align:center;
background:url(${bgImg}); 
background-repeat: no-repeat;
height: 100%;
`;

const MainWrapper = styled.div`
margin: 0 12%;
`;