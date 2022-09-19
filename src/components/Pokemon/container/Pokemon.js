import React, { useEffect, useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import PokemonComponent from "../components/PokemonComponent"
import { getSpecificPokemonSpeciesFetch } from "../../../services/pokemon"

const Pokemon = (props) => {
    const { navigation } = props
    const { pokemon,pokedexNumber,pokemonTypes } = props.route.params
    const [pokemonSpecies,setPokemonSpecies] = useState({})

    useEffect(() => {
        getPokemonSpecies();
    }, [])

    const getPokemonSpecies = async () => {
        try{
            const response = await getSpecificPokemonSpeciesFetch(pokemon.url)
            setPokemonSpecies(response)
        }
        catch (e) {
            console.log('getPokemonSpecies Failure =>', e);
        }
    }

    return (
        <View style={styles.wrapper}>
            <PokemonComponent {...{ pokemonSpecies,pokemon,pokedexNumber,pokemonTypes }} {...props} />
            <TouchableOpacity style={styles.goBack} onPress={() => {navigation.goBack()}} >
                <Text>Atras</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff",
    },
    goBack: {
        width: 120,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#ccc",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50,
    },
})

export default Pokemon