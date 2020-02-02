import React from 'react';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PlanetCards = (props) =>{
   const {name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population} = props;

    return(<CardItem >
            <CardContent>
                <Typography variant="body2" component="p">
                    Name: {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Rotation Period: {rotationPeriod}
                </Typography>
                <Typography variant="body2" component="p">
                    Orbital period: {orbitalPeriod}
                </Typography>
                <Typography variant="body2" component="p">
                 Diameter: {diameter}
                </Typography>
                <Typography variant="body2" component="p">
                    Climate: {climate}
                </Typography>
                <Typography variant="body2" component="p">
                    Gravity: {gravity}
                </Typography>
                <Typography variant="body2" component="p">
                    Terrain: {terrain}
                </Typography>
                <Typography variant="body2" component="p">
                    SurfaceWater: {surfaceWater}
                </Typography>
                <Typography variant="body2" component="p">
                    Population: {population}
                </Typography>
            </CardContent>
        </CardItem>
    )

}

export {PlanetCards};

const CardItem = styled(Card)`
text-align:center;
flex: 0 0 33.333333%;
margin: 0.1%;
`;