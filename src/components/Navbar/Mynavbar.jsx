import axios from 'axios';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

const Mynavbar = ({setPokeResult}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [input, setInput] = useState(0);

  const makePetition = async() =>{
    console.log('this is my input:', input);
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`);
     setPokeResult(response.data);
     console.log('heres the true response:', response.data);
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DEV.F - Pokedex</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <input onChange={e=>setInput(e.target.value)} placeholder="Search pokemon by id" />{' '}
                <Button onClick={makePetition} color="success" >Buscar</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Mynavbar;