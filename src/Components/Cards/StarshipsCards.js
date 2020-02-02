import React from 'react';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const StarshipsCards = (props) =>{
   const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers,
    cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class
} = props;

    return(<CardItem >
            <CardContent>
                <Typography variant="body2" component="p">
                    Name: {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Model: {model}
                </Typography>
                <Typography variant="body2" component="p">
                    Manufacturer: {manufacturer}
                </Typography>
                <Typography variant="body2" component="p">
                    Cost in credits: {cost_in_credits}
                </Typography>
                <Typography variant="body2" component="p">
                    Length: {length}
                </Typography>
                <Typography variant="body2" component="p">
                    Max atmosphering speed: {max_atmosphering_speed}
                </Typography>
                <Typography variant="body2" component="p">
                    crew: {crew}
                </Typography>
                <Typography variant="body2" component="p">
                    Passengers: {passengers}
                </Typography>
                <Typography variant="body2" component="p">
                    Cargo capacity: {cargo_capacity}
                </Typography>
                <Typography variant="body2" component="p">
                    Consumables: {consumables}
                </Typography>
                <Typography variant="body2" component="p">
                    Hyperdrive rating: {hyperdrive_rating}
                </Typography>
                <Typography variant="body2" component="p">
                    MGLT: {MGLT}
                </Typography>
                <Typography variant="body2" component="p">
                   Starship class: {starship_class}
                </Typography>

            </CardContent>
        </CardItem>
    )
}

export {StarshipsCards};

const CardItem = styled(Card)`
text-align:center;
flex: 0 0 33.333333%;
margin: 0.1%;
`;