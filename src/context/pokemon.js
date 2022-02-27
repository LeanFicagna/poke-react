import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState({
        loading: true,
        pokemons: []
    });

    const getPoke = (number) => {
        let arrayReq = [];
        const qtdElem = 150;

        for(let i = 1; i <= qtdElem; i++) {
            arrayReq.push(api.get(`${i}`));
        }

        Promise.all(arrayReq).then((res) => {
            let pokemons = [];
            for(let i = 0; i < qtdElem; i++) {
                pokemons.push(res[i].data);
            }
            setPokemons(prevState => ({
                ...prevState,
                pokemons: pokemons
            }));
        }).finally(() => {
            setPokemons((prevState) => ({
                ...prevState,
                loading: false
            }));
        });
    }

    return <PokemonContext.Provider 
                value={{ 
                    pokemons,
                    getPoke: useCallback(() => getPoke(), []) ,
                }}>
                    {children}
            </PokemonContext.Provider>
}