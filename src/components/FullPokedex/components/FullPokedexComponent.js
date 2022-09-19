import { Text, View, ScrollView } from "react-native"
import FullPokedexList from "./FullPokedexList"

const FullPokedexComponent = (props) => {
    const { allPokemon } = props

    return(
        <View>
            <FullPokedexList {...{allPokemon}} {...props} />
        </View>
    )
}

export default FullPokedexComponent