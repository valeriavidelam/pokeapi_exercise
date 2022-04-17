import React, { useState } from 'react'
import './Searchbar.css'
import { searchPokemon } from '../../api';


const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon (data);
    };

  return (
    <div className="searchbar-container">
        <div className="searchbar">
            <input 
                placeholder="Buscar Pokemon"
                onChange={onChange}
            />

            <button 
                className="search-bttn"
                onClick={onClick}
            >
                Buscar
            </button>
        </div>
    </div>
  )
}

export default Searchbar