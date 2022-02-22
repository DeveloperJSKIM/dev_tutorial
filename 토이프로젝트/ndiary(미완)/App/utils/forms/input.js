import React,{useState} from "react";
import {StyleSheet,View,Text,TextInput} from "react-native";
//여기선 props써서 스타일 상속받게함. styled 써서 만드는것과 어떤게 다른지 모르겠지만 이게더 불편해보임.
const input =(props)=>{
    let template = null;
    switch (props.type){
        case "textinput":
            template=
                <TextInput
                {...props}
                style = {styles.StyledInput}
                />
            break;
        case "textinputRevised":
            template=
                <TextInput
                    {...props}
                    style = {styles.StyledInputRevised}
                />
            break;
        default:
            return template;
    }
    return(
        template
    );
}

const styles = StyleSheet.create({
    StyledInput:{
        width:'100%',
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        fontSize:17,
        padding:5,
        marginTop:30
    },
    StyledInputRevised:{
        width:'100%',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        fontSize:17,
        padding:5,
        marginTop:30
    }

});
export default input;
