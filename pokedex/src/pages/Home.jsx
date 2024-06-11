import { useState, useEffect } from 'react'
import Card from '../components/Card'
import '../css/search.css'


export default function Home() {
    const [id, setId] = useState();
    const [pokemon, setPokemon] = useState(null)

    const handleSubmit = () => {
        setId(event.target.value);
    }

    const fetchData = async () => {
        try {
            if(id == null || id == undefined) {
                setId(1)
            }
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            console.log(data);
            setPokemon(data);
        } catch (error) {
            console.error(`Erro: ${error}`);
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type='number' value={id} onChange={handleSubmit} className='search-input' min={1}></input>
                {
                    pokemon && (
                        <Card 
                            name={pokemon.name}
                            sprite = {pokemon.sprites.front_default}
                            hp={pokemon.stats[0].base_stat} 
                            atk={pokemon.stats[1].base_stat} 
                            def={pokemon.stats[2].base_stat} 
                            satk={pokemon.stats[3].base_stat} 
                            sdef={pokemon.stats[4].base_stat} 
                            spd={pokemon.stats[5].base_stat} 
                        />
                    )
                }
            </div>
        </>
    )
}