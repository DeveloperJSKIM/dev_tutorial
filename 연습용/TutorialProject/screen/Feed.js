import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Feed() {
    return (<View style={styles.container}>
        <Text>This is the Feed screen</Text>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})