import React from "react";
import {View,Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import Setting from "./setting";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dday: new Date(),
      ddayTitle: 'DDAY',
      chatLog:[],
      settingModal: false,
    }
  }

  async UNSAFE_componentWillMount() {
    try {
      const ddayString = await AsyncStorage.getItem('@dday')
      if(ddayString == null){
        this.setState(
          {
            dday: new Date(),
            ddayTitle: '',
          }
        );
      } else {
        const dday = JSON.parse(ddayString);
        this.setState(
          {
            dday: new Date(dday.date),
            ddayTitle: dday.title,
          }
        );
      }
    } catch(e) {
      console.log("ERR");
    }
}

toggleSettingModal(){
    this.setState({
      settingModal: !this.state.settingModal
    })
  }

  async settingHandler(title, date) {
    this.setState({
      ddayTitle: title,
      dday: date,
    });
    
    //저장루틴 추가
   try {
     const dday = {
       title: title,
       date: date,
     }
     const ddayString = JSON.stringify(dday);
     await AsyncStorage.setItem('@dday', ddayString);
   } catch (e) {
     console.log(e);
   }
    this.toggleSettingModal();
  }
    
    

makeDateString(){
  return this.state.dday.getFullYear()+'/'+(this.state.dday.getMonth()+1) + '/'+this.state.dday.getDate();
}
makeRemainString(){
  const distance = new Date().getTime() - this.state.dday.getTime();
  console.log(new Date(), this.state.dday, distance/(1000*60*60*24));
  const remain =Math.floor(distance/(1000*60*60*24));
  if(remain <0){
    return 'D'+remain;
  }
  else if (remain>0){
    return 'D'+remain;
  }
  else if (remain === 0){
    return 'D-day';
  }
}
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./image/background.png')} resizeMode="cover" style={styles.backGround}>
        <View style={styles.settingView}>
          <TouchableOpacity onPress={()=>this.toggleSettingModal()}>
            <Image source={require('./icon/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.ddayView}>
          <Text style={styles.titleText}>{this.state.ddayTitle}까지</Text>
          <Text style={styles.ddayText}>{this.makeRemainString()}</Text>
          <Text style={styles.dateText}>{this.makeDateString()}</Text>
        </View>
        <View style={styles.chatView}>
          <ScrollView style={styles.chatScrollView}>


          </ScrollView>
          <View style={styles.chatControl}>
          <TextInput style={styles.chatInput}/>
          <TouchableOpacity style={styles.sendButton}>
            <Text>Send</Text>
          </TouchableOpacity>
          </View>
        </View>
        {this.state.settingModal?<Setting modalHandler={()=>this.toggleSettingModal()}
                                          settingHandler={(title,date)=>this.settingHandler(title,date)}/>:<></>}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  settingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight: '1%',
  },
  ddayView:{
    flex:6,
    justifyContent: 'center',
    alignItems:'center',
  },
  chatView:{
    flex:6,
  },
  titleText:{
    alignSelf:'flex-end',
    fontSize:36,
    fontWeight: 'bold',
    color: 'black',
    marginRight:'15%',
  },
  ddayText:{
    fontSize:100,
    fontWeight:'bold',
    color:'black',
  },
  dateText:{
    alignSelf:'flex-start',
    fontSize:21,
    fontWeight: 'bold',
    color:'black',
    marginLeft:'15%',
  },
  sendButton:{
    borderWidth:1,
    borderColor:'#a5a5a5',
    backgroundColor:'#FFB6C1',
    height:40,
    width:50,
    borderRadius:20,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
  },
  chatInput:{
    backgroundColor:'white',
    width:'75%',
    borderRadius: 20,
    height:40,
    borderWidth: 1,
    borderColor: '#a5a5a5',
  },
  chatControl:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
  },
  chatScrollView:{
    width:'90%',
    alignSelf:'center',
    backgroundColor:'rgba(201,201,201,0.7)',
    borderRadius:5,
    margin: 10,
    borderWidth:1,
    borderColor:'#a5a5a5',
  },
  backGround:{
    flex:1,
    justifyContent:'center'
  },
  

});