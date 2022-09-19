import { Text, View, Image, Dimensions } from "react-native"

const Home = (props) => {
    return (
        <View style={{justifyContent: 'flex-end',alignItems: 'center', flex: 1, backgroundColor: "#fff"}}>
            <Image 
                style={{width: 100, height: 100}} 
                source={require("../../../../assets/PokeLogo2.png")} />
            <Image
                style={{width: Dimensions.get('window').width, height: 300}} 
                source={require("../../../../assets/snorlax-de-pokemon_3840x2160_xtrafondos.com.jpg")} 
            />
        </View>
    )
}

export default Home