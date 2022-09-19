import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native"

const PokemonComponent = (props) => {
    const { pokemon,pokemonSpecies,pokemonTypes, pokedexNumber } = props

    const pokemonAbilities = pokemon.abilities.map((item) => item.ability.name)

    const itIs = (value) => {
        return value ? "Yes" : "No"
    }
        
    // More features to add
    // console.log('pokemonSpecies.pokedex_numbers =>',pokemonSpecies.pokedex_numbers[0].entry_number);
    // console.log('pokemonSpecies =>',pokemonSpecies.capture_rate);

    return(
        <View style={styles.wrapper} >
        <View>
            <View style={styles.spriteContainer}>
                <Image source={{ uri: pokemon.sprites.front_default}} style={styles.sprite} />
                <Image source={{ uri: pokemon.sprites.back_default}} style={styles.sprite} />
                <Image source={{ uri: pokemon.sprites.front_shiny}} style={styles.sprite} />
                <Image source={{ uri: pokemon.sprites.back_shiny}} style={styles.sprite} />
            </View>
        </View>
                <Text style={styles.name}> { pokemon.name }</Text>
                <Text>National Pokedex: {pokedexNumber}º</Text>
            <Text style={styles.formatData}>
                { pokemonTypes.length > 1 ? `Types: ${pokemonTypes[0]} / ${pokemonTypes[1]}` : `Type: ${pokemonTypes[0]}` }
            </Text>
            <View>
                <Text style={styles.formatData}>{pokemonAbilities.length > 1 
                    ? `Abilities: ${pokemonAbilities[0]} / ${pokemonAbilities[1]}`
                    : `Ability: ${pokemonAbilities[0]}`}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                <View style={styles.itIs}><Text style={styles.bold}>Baby: </Text><Text>{ itIs(pokemonSpecies.is_baby) }</Text></View>
                <View style={styles.itIs}><Text style={styles.bold}>Legendary: </Text><Text>{ itIs(pokemonSpecies.is_legendary) }</Text></View>
                <View style={styles.itIs}><Text style={styles.bold}>Mythical: </Text><Text>{ itIs(pokemonSpecies.is_mythical) }</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: "center",
    },
    formatData: {
        textTransform: 'capitalize',
    },
    name:{
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: "bold",
    },
    bold: {
        fontWeight: "bold",
    },
    itIs: {
        flexDirection: 'row',
        marginRight: 10,
    },
    spriteContainer: { 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        flexWrap: "wrap" 
    },
    sprite: {
        width: 96, 
        height: 96, 
        flexBasis: "25%"
    },
})

export default PokemonComponent