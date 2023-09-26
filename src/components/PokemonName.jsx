import React from 'react'
import s from "./PokemonName.module.sass"
export default function PokemonName({name, image, starred, id, height, attack}) {
  return (
    <div className={s.card}>
      <h1>{name} </h1>
      <img src={image} alt={`Image of ${name}`} />
      <p>{starred}</p>
      <p>id:{id}</p>
      <p>height:{height}</p>
      <p>attack:{attack}</p>
    </div>
  );
}
