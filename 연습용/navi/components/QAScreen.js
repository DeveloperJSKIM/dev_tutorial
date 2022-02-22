import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button} from 'react-native';
function QAScreen ({ navigation }) {
    return (
    <Text>무엇을 물어보아도 모른다고 답변 할 것이다.</Text>
    );
  }

export default QAScreen;