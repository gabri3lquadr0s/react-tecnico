import { useState } from 'react'
import '../css/card.css'

export default function Card(props) {
    return(
        <div className='card-container'>
            <div className='card-title'>
                <h1>{props.name}</h1>
            </div>
            <figure className='sprite'>
                <img src={props.sprite}></img>
            </figure>
            <div className='info-container'>
                <h2>HP: {props.hp}</h2>
                <h2>ATK: {props.atk}</h2>
                <h2>DEF: {props.def}</h2>
                <h2>SATK: {props.satk}</h2>
                <h2>SDEF: {props.sdef}</h2>
                <h2>SPD: {props.spd}</h2>
            </div>
        </div>
    )
}