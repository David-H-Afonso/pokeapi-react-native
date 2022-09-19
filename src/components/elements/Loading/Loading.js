import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const Loading = ({size, color}) => {
    return(
        <View style={styles.viewLoading}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})