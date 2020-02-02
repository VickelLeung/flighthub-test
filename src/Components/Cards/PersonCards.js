import React from 'react';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PersonCards = (props) =>{
   const {name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender} = props;

    return(<CardItem >
            <CardContent>
                <Typography variant="body2" component="p">
                    Name: {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Height: {height}
                </Typography>
                <Typography variant="body2" component="p">
                    Mass: {mass}
                </Typography>
                <Typography variant="body2" component="p">
                    Hair color: {hairColor}
                </Typography>
                <Typography variant="body2" component="p">
                    Skin color: {skinColor}
                </Typography>
                <Typography variant="body2" component="p">
                    Eye color: {eyeColor}
                </Typography>
                <Typography variant="body2" component="p">
                    Birth year: {birthYear}
                </Typography>
                <Typography variant="body2" component="p">
                    Gender: {gender}
                </Typography>
            </CardContent>
        </CardItem>
    )

}

export {PersonCards};

const CardItem = styled(Card)`
text-align:center;
width:100%;
flex: 0 0 33%;

`;