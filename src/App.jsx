import "./App.css";
import { useEffect, useState } from "react";
import Chip from "./components/Chip";
import PokemonName from "./components/PokemonName";
import s from "./components/App.module.sass";
function App() {
  const [data, setData] = useState(null);
  const [currentName,  setCurrentName]= useState("")
const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;
    try {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setCurrentName(data.results[0].name)
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);
 useEffect(() => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${currentName}`;
     try {
       fetch(pokemonUrl)
         .then((response) => response.json())
         .then((data) => {
           setPokemonData(data);
         });
     } catch (error) {
       console.error("Error fetching pokemon data:", error);
     }
   
 }, [currentName]);
  console.log(pokemonData)
  return (
    <div className={s.container}>
      <main>
        <div className={s.buttons}>
          <div className={s.buttons.row}>
            {data?.results.map((pokemon) => (
              <Chip
                key={pokemon.url}
                name={pokemon.name}
                onClick={() => setCurrentName(pokemon.name)}
              />
            ))}
          </div>
        </div>
        <div className={s.pokemons}>
          {pokemonData && (
            <PokemonName
              key={pokemonData.id}
              name={pokemonData.name}
              image={pokemonData.sprites?.front_default}
              starred={pokemonData.moves?.length}
              id={pokemonData.id}
              height={pokemonData.height}
              attack={
                pokemonData.stats?.find((stat) => stat.stat.name === "attack")
                  .base_stat
              }
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
