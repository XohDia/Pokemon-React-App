import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemons";

const App: FunctionComponent = () => {
    // const name: string = "React";
    const [name, setName] = useState<String>('Dresseur');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1>Bonjour, {name}!</h1>
            <h2>Pokédex</h2>
            <p>Il y a {pokemons.length} pokémons dans le pokédex.</p>
        </div>
    )
}

export default App;

/* 
import React from "react";

export default class App extends React.Component {
    const name: string = "React";
 
    render() {
        return ( <h1>Bonjour, {name}!</h1> );
    }
}
*/