import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import Hr from 'react-native-hr'
function FAQScreen ({ navigation }) {
    return (
    <>
      <ScrollView contentContainerStyle={styles.listContainer}>
        <Text>HI</Text>
        <Hr/>
        <Text>HI</Text>
        <Hr/>
        <Text>HI</Text>
        <Hr/>
      </ScrollView>
      
    </>
    );
  };
  
  const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
  });

export default FAQScreen;