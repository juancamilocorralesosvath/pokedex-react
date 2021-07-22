import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CanvasJSReact from '../Assets/canvasjs.react';
import './../styles/Individual.css';
import previous from './../Assets/SVG/previous.svg';
import next from './../Assets/SVG/next.svg';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Individual() {
    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState({});
    let { idPokemon } = useParams();
    let MyCanvasOptions = {};
    //Make the petition to the API and set the pokemon
    const petition = async() =>{
        try {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`);
            setPokemon(response.data);
            setImage(response.data.sprites.front_default);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        petition();
    // eslint-disable-next-line    
    },[])
    /* once I do the petition and get the pokemon, I start the process
       of creating the chart for the stats (using CanvasJS). 
    */
    const createCanvas = (dataset) =>{
       MyCanvasOptions = {
            title: {
                text: 'Stats'
            },
            data: [{
                type: 'column',
                dataPoints:[
                    { label: dataset[0].stat.name, y: dataset[0].base_stat },
                    { label: dataset[1].stat.name, y: dataset[1].base_stat },
                    { label: dataset[2].stat.name, y: dataset[2].base_stat },
                    { label: dataset[3].stat.name, y: dataset[3].base_stat },
                    { label: dataset[4].stat.name, y: dataset[4].base_stat },
                    { label: dataset[5].stat.name, y: dataset[5].base_stat }
                ]
            }]
        }
      return MyCanvasOptions;
    }
    const whenYouDoClickInPreviousButton = () => {
        idPokemon = idPokemon -1;
        petition();
    }
    const whenYouDoClickInNextButton = () => {
        //thank you Lord for console.logs xD
        //console.log('this is id before next: ', idPokemon)
        idPokemon = Number(idPokemon) + 1;
        //console.log('this is the id when next:', idPokemon);
        petition();
    } 
    const color = (typeName) =>{
        //habra una mejor manera?
    const FIRE = 'fire';
    const NORMAL = 'normal';
    const WATER = 'water';
    const GRASS = 'grass';
    const ELECTRIC = 'electric';
    const ICE = 'ice';
    const FIGHTING = 'fighting';
    const POISON = 'poison';
    const GROUND = 'ground';
    const FLYING = 'flying';
    const PSYCHIC = 'psychic';
    const BUG = 'bug';
    const ROCK = 'rock';
    const GHOST = 'ghost';
    const DARK = 'dark';
    const DRAGON = 'dragon';
    const STEEL = 'steel';
    const FAIRY = 'fairy';
        let result = {}
        if(typeName === FIRE ){
            result =  {backgroundColor: '#C03028'}
        }else if(typeName === WATER){
            result =  {backgroundColor: '6890F0'}          
        }else if(typeName === GRASS){
            result =  {backgroundColor: '#78C850'}          
        }else if(typeName === NORMAL){
            result =  {backgroundColor: '#A8A878'}          
        }else if(typeName === BUG){
            result =  {backgroundColor: '#A8B820'}          
        }else if(typeName === ELECTRIC){
            result = {backgroundColor: '#F8D030'}
        }else if(typeName === ICE){
            result = {backgroundColor: '#98D8D8'}
        }else if(typeName === FIGHTING){
            result = {backgroundColor: '#C03028'}
        }else if(typeName === POISON){
            result = {backgroundColor: '#A040A0'}
        }else if(typeName === GROUND){
            result = {backgroundColor: '#E0C068'}
        }else if(typeName === FLYING){
            result = {backgroundColor: '#A890F0'}
        }else if(typeName === PSYCHIC){
            result = {backgroundColor: '#F85888'}
        }else if(typeName === ROCK){
            result = {backgroundColor: '#B8A038'}
        }else if(typeName === GHOST){
            result = {backgroundColor: '#705898'}
        }else if(typeName === DARK){
            result = {backgroundColor: '#705848'}
        }else if(typeName === DRAGON){
            result = {backgroundColor: '#7038F8'}
        }else if(typeName === STEEL){
            result = {backgroundColor: '#B8B8D0'}
        }else if(typeName === FAIRY){
            result = {backgroundColor: '#F0B6BC'}
        }
        return result;
    }
    
    if(!pokemon) return <h1>sorry, we couldnt bring your pokemon...</h1>
    return(
        <main className='poke-info-container' >
            <article className='poke-info' >
                <header className='previous-next-buttons' >
                    <Link to={`/pokemons/${idPokemon - 1}`} style={{width: '45%'}} >
                        <button onClick={whenYouDoClickInPreviousButton} className='previous buttons' >
                            <img alt='go to previous' className='next-previous-spans' src={previous} ></img>
                        </button>
                    </Link>
                    <Link to={`/pokemons/${Number(idPokemon) + 1}`} style={{width: '45%'}} >
                        <button onClick={whenYouDoClickInNextButton} className='next buttons' >
                        <img alt='go to next' className='next-previous-spans' src={next} ></img>
                        </button>
                    </Link>
                </header>
                <h1 style={{textAlign: 'center'}} >{pokemon.name}</h1>
                <section className='image-and-info-container' >
                <article className='image-container' >
                    <img alt='pokeimage' className='my-image' src={image} ></img>
                </article>
                <article className='info' >
                        <h4 style={{textAlign: 'center'}} >type:</h4>
                        <div className='types-container' >
                            {pokemon.types ? pokemon.types.map(type=> {
                            return <li style={color(type.type.name)} className='poke-type' key={type.type.name} >{type.type.name}</li>
                                }): <h1>sorry bro</h1>}
                        </div>
                        <h4 style={{textAlign: 'center'}} >abilities:</h4>
                            <div className='abilities-container' >
                                {pokemon.abilities ?pokemon.abilities.map(ability=> <li className='poke-abilities' key={ability.ability.name} >{ability.ability.name}</li>) : <h1>sorry</h1>}
                            </div>
                            <div className='height-and-weight' >
                                <h3>height:</h3>
                                <h3>weight:</h3>
                            </div>
                            <div className='height-weight-results' >
                                <p>{pokemon.height}m</p>
                                <p>{pokemon.weight} pounds</p>
                            </div>
                    </article>
                </section>
                <section className='stats-container' >
                        { pokemon.stats ? <CanvasJSChart className='my-canvas-chart' options={createCanvas(pokemon.stats)}/> :<h1>sorry bro</h1>}
                    </section>
                {/* ALABADO SEA JESUCRISTO! */}
            </article>
        </main>
    )
}