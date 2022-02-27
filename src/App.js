import { useEffect } from "react";
import Layout from "./components/layout";
import PokemonsItem from "./components/pokemons-item";
import usePokemon from "./hooks/pokemon-hook";

function App() {
  const { pokemons, getPoke } = usePokemon();

  useEffect(() => {
    if(pokemons.loading)
      getPoke();
  });
  console.log(pokemons.pokemons[0])
  return (
    <Layout>
      {pokemons.pokemons.map((event) => 
        <PokemonsItem 
        image={event.sprites.other.home.front_default}
          name={event.name}
          id={event.id}
          types={event.types.map((event2 => event2.type.name)).join('|')}
        />
      )}
    </Layout>
  );
}

export default App;
