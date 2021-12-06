import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Setting extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            date: new Date(),

        }
    }
  render() {
    return (
      <View  style={styles.container}>
		<TouchableOpacity style={styles.background}
                          activeOpacity={1}
                          onPress={this.props.modalHandler}
        />
            <View style={styles.modal}>
                <Text style={styles.titleText}>
                    Setting!
                </Text>
                <TextInput
                style={styles.ddayInput}
                value={this.state.title}
                onChangeText={(changedText)=>{this.setState({title:changedText})}}
                placeholder={"D-day Title"}
                />
                <DatePicker
                date={this.state.date}
                onDateChange={(date)=>{this.setState({date:date})}}
                mode='date'
                />
                <TouchableOpacity onPress={()=>this.props.settingHandler(this.state.title,this.state.date)}>
            <Text style={styles.doneText}>
                Done!
            </Text>
        </TouchableOpacity>
            </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ddayInput: {
    backgroundColor: 'white',
    marginBottom: 20,
    width: '75%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#a5a5a5',
  },
  modal: {
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '50%',
    backgroundColor: 'white',
  },
  doneText: {
    color: 'rgb(1,123,255)',
    fontSize: 15,
    margin: 10,
  },
  titleText: {
    fontSize: 18,
    margin: 10,
  }
});