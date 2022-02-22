import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Profile() {
        return (<View style={styles.container}>
            <Text>This is the Profile screen</Text>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

