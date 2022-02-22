import React, {useState, useRef, useEffect, useContext} from "react";
import styled from "styled-components/native";
import { Button,Image,Input,ErrorMessage } from "../components";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';//키보드나와도 Input안가리는 스크롤뷰
import {signup} from "../firebase";
import {Alert} from "react-native";
import {validateEmail,removeWhitespace} from "../utils";
import {UserContext,ProgressContext} from "../contexts";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.background};
  padding: 50px 20px;

`;
const DEFAULT_PHOTO='https://firebasestorage.googleapis.com/v0/b/chat-486e5.appspot.com/o/pepe.jpg?alt=media';
const Signup =({navigation})=>{
    const [photo,setPhoto]=useState(DEFAULT_PHOTO);
    const [name,setName]=useState(''); //회원가입시 이름입력받음
    const [email,setEmail] =useState(''); //email입력받으려고 만듦.
    const [password,setPassword] =useState('');//비번입력받으려고 만듦
    const [passwordConfirm,setPasswordConfirm] =useState('');//비번확인받으려고 만듦
    const [errorMessage,setErrorMessage]=useState(''); //에러메세지 핸들링
    const [disabled,setDisabled]=useState(true); //확인버튼 다완료됬을때만 색들어옴.

    const refEmail = useRef(null);//이름치고 확인누르면 아이디으로 넘어가게 하려고만듦.
    const refPassword = useRef(null);//아이디치고 확인누르면 비번으로 넘어가게 하려고만듦.
    const refPasswordConfirm = useRef(null);//비번치고 확인누르면 비번확인으로 넘어가게 하려고만듦.
    const {setUser} = useContext(UserContext);
    const {spinner} = useContext(ProgressContext);

    useEffect(()=>{
        setDisabled(
            !(name&&email&&password&&passwordConfirm&&!errorMessage) //이름,이메일,비번,비번확인들어오고 에러메세지 없을때만 false
        );
    },[email,name,password,passwordConfirm,errorMessage]);//[]안에들은 state가 바뀔때마다 동작

    useEffect(()=>{//에러 핸들링
        let error='';
        if(!name) {error='please enter your name';}  //이름 안썻을때
        else if(!email) {error='plese enter your email';}//이메일 안썻을때
        else if(!validateEmail(email)) {error='plz chack your email again..'}//이메일 형식 다를때
        else if(password.length<6) {error='password is to shot';}//비번 6자리 미만일때
        else if(password!=passwordConfirm){error='plz checked again...';}//비번이랑 확인이랑 다를때
        else{error='';}//그외에는 ''
        setErrorMessage(error);
    },[email,name,password,passwordConfirm]);
    const _handleSignupBtnPress = async ()=>{ //비번다치고 Signup버튼 눌렀을때랑 그냥 키보드에서 확인누를때랑 같은곳 보게함.
        try{
            spinner.start();
            const user = await signup({name,email,password,photo}); //signup함수 호출->firebase에 저장
            //navigation.navigate('Profile',{user});//프로필페이지로 이동
            setUser(user);
        } catch (e) {
            Alert.alert('Signup Error',e.message);//잘못되면 에러메세지
        } finally {
            spinner.stop();
        }
    };
    return(
        <KeyboardAwareScrollView extraScrollHeight={20}>
        <Container>
            <Image showButton={true } url={photo} onChangePhoto={setPhoto}/>
            <Input
                label={"Name"}
                placeholder={"Name"}
                returnKeyType={"next"}
                value={name}
                onChangeText={setName}
                onSubmitEditing={()=>refEmail.current.focus()}
                onBlur={()=>setName(name.trim())}
                maxLength={12}
            />
            <Input
                ref={refEmail}
                label={"Email"}
                placeholder={"E-mail"}
                returnKeyType={"next"}
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={()=>refPassword.current.focus()}
                onBlur={()=>setEmail(removeWhitespace(email))}
            />
            <Input
                ref={refPassword}//다음버튼누르면 ref설정된 PASSWORD입력창으로넘어옴
                label={"Password"}
                placeholder={"PassWord"}
                returnKeyType={"next"}
                value={password}
                onChangeText={setPassword}
                isPassword={true}//비밀번호 별표시
                onSubmitEditing={()=>refPasswordConfirm.current.focus()}
                onBlur={()=>setPassword(removeWhitespace(password))}
            />
            <Input
                ref={refPasswordConfirm}//다음버튼누르면 ref설정된 PASSWORD confirm입력창으로넘어옴
                label={"PasswordConfirm"}
                placeholder={"PassWordConfirm"}
                returnKeyType={"done"}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                isPassword={true}//비밀번호 별표시
                onSubmitEditing={_handleSignupBtnPress}
                onBlur={()=>setPasswordConfirm(removeWhitespace(passwordConfirm))}

            />
            <ErrorMessage message={errorMessage}/>
            <Button
                title="Sign up"
                onPress={_handleSignupBtnPress}
                disabled={disabled}
            />


        </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signup;