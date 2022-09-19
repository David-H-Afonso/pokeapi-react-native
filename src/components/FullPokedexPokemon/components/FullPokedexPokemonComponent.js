import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"

const FullPokedexPokemonComponent = (props) => {
    const { pokemon,pokedexNumber,pokemonTypes, color, navigation } = props

    return(
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("Pokemon", {pokemon, pokemonTypes, pokedexNumber})} >
        <Image source={{ uri: pokemon.sprites.other["official-artwork"].front_default}} style={{width: 96, height: 96, backgroundColor: "#F2F2F2", borderRadius: 5}} />
            <Text style={{fontSize: 10}}>N.º{pokedexNumber}</Text>
            <Text style={styles.name}>{ pokemon.name } </Text>
            <View style={{flexDirection: "row"}}>
                <View style={[styles.type,{backgroundColor: color[0]?.bgColor}]}>
                    <Text style={[styles.formatData, styles.typeText, {color: color[0]?.color}]}>{pokemonTypes[0]}</Text>
                </View>
                { pokemonTypes[1] 
                    ? 
                    <View style={[styles.type,{backgroundColor: color[1]?.bgColor}]}>
                        <Text style={[styles.formatData, styles.typeText, {color: color[1]?.color}]}>{pokemonTypes[1]}</Text>
                    </View>
                :   null }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        alignItems: 'center',
        flexBasis: "50%"
    },
    name: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    type: {
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 3,
        marginTop: 2,
    },
    typeText: {
        fontSize: 12,
        padding: 1,
        textTransform: 'capitalize',
    },
})

export default FullPokedexPokemonComponent