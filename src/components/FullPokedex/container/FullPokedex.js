import { useState, useEffect } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { getAllPokemonFetch } from '../../../services/pokemon'
import FullPokedexComponent from '../components/FullPokedexComponent'
import {Loading} from '../../elements/index'

const FullPokedex = (props) => {
    const { navigation } = props
    const [allPokemon,setAllPokemon] = useState({})
    const [loading,setLoading] = useState({})
  
    useEffect(() => {
        getAllPokemon();
    },[])
    
    const getAllPokemon = async () => {
        try{
            setLoading(true)
            let response = await getAllPokemonFetch();
            setAllPokemon(response)
        }
        catch (e) {
            console.log('getAllPokemon failure =>', e);
        }
        finally{
            setLoading(false)
        }
    }
  
    // console.log('allPokemon =>',allPokemon);
    
    return (
        <View style={styles.wrapper}>
            { loading
                ?
                <Loading size="large" color="red" />
                :
                <>
                    <FullPokedexComponent {...{allPokemon}} {...props}></FullPokedexComponent>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 0,
        paddingTop: 40,
    }
})

export default FullPokedex