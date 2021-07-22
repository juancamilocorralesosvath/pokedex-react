import { Link } from 'react-router-dom';
import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import '../../styles/PokeCard.css';
import pokeball from '../../Assets/SVG/pokeball.svg';

const PokeCard = ({ id, name, image }) => {
    
  return (
        <>
        <Link to={`/pokemons/${id}`} style={{textDecoration:'none', color:'none'}} >
          <Card className='poke-card' >
            <CardImg className='poke-img' src={image} alt="Card image cap" />
            <CardBody className='poke-card-body' >
              <CardTitle className='poke-card-title' tag="h5">{name}</CardTitle>
              <Button>
              <img alt='cute-pokeball' className='pokeball-img' src={pokeball} ></img>
                More
                </Button>
            </CardBody>
          </Card>
        </Link>
        </>
  );
};

export default PokeCard;