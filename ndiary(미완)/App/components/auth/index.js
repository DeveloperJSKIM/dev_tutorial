import React,{useState} from "react";
import {StyleSheet,View,Text,ActivityIndicator} from "react-native";
import AuthForm from "./authForm";
import AuthLogo from "./authLogo";
import {ScrollView} from "react-native-gesture-handler";


const AuthComponent =({navigation})=>{
    const [loading,setLoading] = useState(false);
    const goWithoutLogin = () =>{
        navigation.navigate("AppTabComponent");
    }
            if(loading){
                return(
                    <View style={styles.loading}>
                        <ActivityIndicator/>
                    </View>
                );
            }else{
                return(
                    <ScrollView style={styles.container}>
                        <View>
                            <AuthLogo/>
                            <AuthForm
                                goWithoutLogin = {goWithoutLogin}
                            />
                        </View>
                    </ScrollView>
                );

            }
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        flex:1,
        backgroundColor:'#7487C5',
        paddingTop: 80,
        paddingLeft:50,
        paddingRight:50,
    },

});
export default AuthComponent;
