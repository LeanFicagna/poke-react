import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon";

const usePokemon = () => {
    const { pokemons, getPoke } = useContext(PokemonContext);

    return { pokemons, getPoke };
}

export default usePokemon;