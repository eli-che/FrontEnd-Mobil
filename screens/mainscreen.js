import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MainScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Test Text</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        padding: 100,
        alignItems: 'center'
    }
});

export default MainScreen;  

