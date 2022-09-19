import React, { useState, useEffect } from 'react';
import { View } from "react-native"
import { getSpecificPokemonFetch  } from "../../../services/pokemon";
import FullPokedexPokemonComponent from '../components/FullPokedexPokemonComponent';
import { Loading } from '../../elements';
import { Color } from "../../elements/index"

const FullPokedexPokemon = (props) => {
    const { item } = props

    const [loading,setLoading] = useState({})

    const [pokemon, setPokemon] = useState({})
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokedexNumber, setPokedexNumber] = useState([])
    const [color,setColor] = useState({})

    useEffect(() => {
        gatherData();        
    },[])

    const gatherData = async () => {
        try{
            setLoading(true)
            await getPokemon();
            
        }
        catch (e) {
            console.log('gatherData Failure =>',e);
        }
        finally{
            setLoading(false)
        }
    }

    const getPokemon = async () => {
        try{
            const response = await getSpecificPokemonFetch(item.url)
            const type = response.types.map((e) => e.type.name)
            setPokemon(response)
            setPokedexNumber(("00" + response.id).slice(-3))
            setPokemonTypes(type)
            getColor(type);
        }
        catch (e) {
            console.log('getPokemon Failure =>', e);
        }
    }

    const getColor = async (type) => {
        try {
            let colors = []
            colors.push(Color(type[0]))
            if(type[1]){
            setColor(colors.push(Color(type[1])))
            }
            setColor(colors)
        }
        catch (e) {
            console.log('getColor failure',e)
        }
    }

    return(
        <>
        { loading 
            ?
            <View style={{marginBottom: 50}}>
                <Loading size="large" color="red" />
            </View>
            :
            <FullPokedexPokemonComponent {...{pokemon,pokemonTypes,pokedexNumber, color}} {...props} />
        }
        </>
    )
}

export default FullPokedexPokemon