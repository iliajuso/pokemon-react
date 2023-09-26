import React from 'react'
import s from "./PokemonButton.module.sass"
export default function Chip({ onClick, name }) {
 
  return (
    <button className={s.button} onClick={onClick}>{name}</button>
  )
}
