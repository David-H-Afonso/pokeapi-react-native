import { useCallback, useMemo } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import FullPokedexPokemon from "../../FullPokedexPokemon/container/FullPokedexPokemon";

const FullPokedexList = (props) => {
    const { allPokemon } = props

    const renderItem = useCallback ( ({item}) => <FullPokedexPokemon item={item} {...props}/>, [] );
    const keyExtractor = useCallback ( (item) => item.name, [] );

    return (
        <View style={styles.wrapper}>
            <FlatList 
                numColumns={2}
                data={allPokemon.results}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        // width: Dimensions.get('window').width,
        padding: 20,
        paddingBottom: 0,
    }
})

export default FullPokedexList