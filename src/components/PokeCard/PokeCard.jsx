import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import '../../styles/PokeCard.css';
import pokeball from '../../Assets/SVG/pokeball.svg';
const PokeCard = ({ requestUrl }) => {

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState({});
    const [id, setId] = useState(1);
    
    useEffect(()=>{
      const individualRequest = async() => {
        let response = await axios.get(requestUrl);
        setPokemon(response.data);
        setImage(response.data.sprites.front_default);
        setId(response.data.id);
    }
    individualRequest();
    // eslint-disable-next-line
    },[])
    let style = {};
    const createStyle = () => {
      let result = {};
      const fire = 'fire';
      const water = 'water';
      const grass = 'grass';
      const normal = 'normal';
      const bug = 'bug';
      let types = pokemon.types;
      types.forEach(type=>{
        if(type.type.name === fire ){
          result =  {backgroundColor: 'red'}
        }else if(type.type.name === water){
          result =  {backgroundColor: 'blue'}          
        }else if(type.type.name === grass){
          result =  {backgroundColor: 'green'}          
        }else if(type.type.name === normal){
          result =  {backgroundColor: 'gray'}          
        }else if(type.type.name === bug){
          result =  {backgroundColor: 'yellow'}          
        }
      })
      style = result;
    }
  return (
        <>
        {
          pokemon.name ? createStyle() : console.log('not yet cowboy')
        }
        <Link to={`/pokemons/${id}`} style={{textDecoration:'none', color:'none'}} >
          <Card className='poke-card' >
            <CardImg style={style} className='poke-img' src={image} alt="Card image cap" />
            <CardBody className='poke-card-body' >
              <CardTitle className='poke-card-title' tag="h5">{pokemon.name}</CardTitle>
              <Button className='poke-button' >
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