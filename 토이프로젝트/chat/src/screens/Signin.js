import React,{useContext,useState,useRef,useEffect} from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button,Image,Input,ErrorMessage } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signin } from "../firebase";
import {Alert} from "react-native";
import {validateEmail,removeWhitespace} from "../utils";
import {UserContext,ProgressContext} from "../contexts";


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.background};
    padding: 0 20px;
    padding-top: ${({insets:{top}})=>top-20}px;
    padding-bottom: ${({insets:{bottom}})=>bottom-20}px;

`;

const LOGO ='https://firebasestorage.googleapis.com/v0/b/chat-486e5.appspot.com/o/icon.png?alt=media';



const Signin =({navigation})=>{
    const insets = useSafeAreaInsets();//노치 디자인에서 위에 가려지는거 막아주게하려고 만듦
    const theme = useContext(ThemeContext);//style 안에서 theme사용할 수 있게 해주는 세팅
    const [email,setEmail] =useState(''); //email입력받으려고 만듦.
    const [password,setPassword] =useState('');//비번입력받으려고 만듦
    const refPassword = useRef(null);//아이디치고 확인누르면 비번으로 넘어가게 하려고만듦.
    const [errorMessage,setErrorMessage] = useState('');//에러메세지
    const [disabled,setDisabled] = useState(true);
    const {setUser} = useContext(UserContext);//유저정보 다른 내비게이션으로 보내려고 만듦
    const {spinner} = useContext(ProgressContext);//모든 화면에서 spinner모션 사용하려고만듦

    useEffect(()=>{ //Disabled 활용
        setDisabled(!(email&&password&&!errorMessage));//이메일 입력되고 패스워드 입력되고 에러메세지 없을때
    },[email,password,errorMessage])//관련된 state들

    const _handleEmailChange = email =>{ //email입력시 공백 없애줌.
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(validateEmail(changedEmail)?'':'Please verify your email'); //이메일 유효성 검사.
    };
    const _handlePasswordChange = password=>{//비밀번호 입력시 공백 없애줌.
        const changedPassword = removeWhitespace(password);
        setPassword(changedPassword);
    };

    const _handleSigninBtnPress = async ()=>{ //비번다치고 Signup버튼 눌렀을때랑 그냥 키보드에서 확인누를때랑 같은곳 보게함.
        try {
            spinner.start();
            const user = await signin({email,password});
            //navigation.navigate('Profile',{user});
            setUser(user);
        } catch (e) {
            Alert.alert('Sign Error',e.message);
        } finally {
            spinner.stop();
        }

    };
    return(
        <KeyboardAwareScrollView
            extraScrollHeight={20}
            contentContainerStyle={{flex:1}}
        >

        <Container insets={insets}>
            <Image url={LOGO}/>
            <Input
                label={"Email"}
                placeholder={"E-mail"}
                returnKeyType={"next"}
                value={email}
                onChangeText={_handleEmailChange}
                onSubmitEditing={()=>refPassword.current.focus()}
            />
            <Input
                ref={refPassword}//다음버튼누르면 ref설정된 PASSWORD입력창으로넘어옴
                label={"Password"}
                placeholder={"PassWord"}
                returnKeyType={"done"}
                value={password}
                onChangeText={_handlePasswordChange}
                isPassword={true}//비밀번호 별표시
                onSubmitEditing={_handleSigninBtnPress}
            />
            <ErrorMessage message={errorMessage}/>
            <Button 
            title="Sign up" 
            onPress={_handleSigninBtnPress}
            disabled={disabled}
            />
            <Button //버튼배경투명색,글 노란색
            title="or Signup" 
            onPress={()=>{navigation.navigate('Signup')}}
            containerStyle={{marginTop:0,backgroundColor:'transparent',}}
            textStyle={{color:theme.btnTextLink,fontSize:18}}/>

        </Container>
        </KeyboardAwareScrollView>
    );   
};

export default Signin;