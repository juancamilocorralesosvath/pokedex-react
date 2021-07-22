import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardColumns } from 'reactstrap';
import PokeCard from '../components/PokeCard/PokeCard';
import PokeCardV2 from '../components/PokeCard/PokeCardV2';
import '../styles/Cards.css'

export default function Cards({pokeResult}){
    const [pokemons, setPokemons] = useState([]);

    //this way we are saying we only want it to execute once: when it renders.
    useEffect(()=>{
        const petitionToApi = async () => {
            try {
                let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=21');
                setPokemons(response.data.results);
                console.log('this is the pokeresult at the moment of loading the page:',pokeResult);
            } catch (error) {
                throw new Error(error);
            }
        }
        petitionToApi();
    // eslint-disable-next-line
    }, [])

    const renderMyReturn = () => {
        if(pokeResult.name){
           return <PokeCardV2 key={pokeResult.id} id={pokeResult.id} name={pokeResult.name} image={pokeResult.sprites.front_default} />
        }else if(pokemons){
            return pokemons.map(pokemon=><PokeCard key={pokemon.url}  requestUrl={pokemon.url} />);
        }else{
            return <h1>sorry, an error ocurred.</h1>
        }
    }
    useEffect(()=>{
        renderMyReturn();
        // eslint-disable-next-line
    },[pokeResult]) 
    return(
        <main  className="card-columns-container" >
        <CardColumns className='cards' >
            {pokemons ? renderMyReturn() : <h1>hello world</h1>}         
        </CardColumns>
    </main>
    )
}