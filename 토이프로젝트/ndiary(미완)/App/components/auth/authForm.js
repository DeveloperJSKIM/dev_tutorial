import React,{useState,Component} from "react";
import {StyleSheet,View,Text,TextInput,Button} from "react-native";
import Input from '../../utils/forms/input';
import {validateEmail} from "../../utils/forms/validationRules";
import {signIn,signUp} from "../../store/actions/user_actions";
import {useSelector,useDispatch} from "react-redux";

const AuthForm =({goWithoutLogin})=> {
    const [textId,setTextId] = useState(''); //state 값에서 바꾸는게 잘 안되서 그냥 만들고submit할때만 적용함.
    const [textPw,setTextPw] = useState(''); //위와같음.
    const [textPwCf,setTextPwCf] = useState(''); //위와같음.
    const User = useSelector(state=>state.User); //useSelector user_reducer 가르킴
    const dispatch = useDispatch(); //dispatch 선언
    const onSignIn = data => dispatch(signIn(data)); //action signIn 에 data 넣어주는 디스패치붙임.
    const onSignUp = () => dispatch(signUp());

    const [state,setState]=useState({
        type:'로그인',
        action:'로그인',
        actionMode:'회원가입',
        hasError:false,
        form:{
            email:{
                value:'',
                type:"textinputRevised",
                rules:{
                    isRequired:true,
                    isEmail:true,
                },
                valid:false
            },
            password:{
                value:'',
                type:"textinput",
                rules:{
                    isRequired:true,
                    minLength:6
                },
                valid:false
            },
            confirmPassword:{
                value:"",
                type:'textinput',
                reles:{
                    confirmPassword:'password'
                }
            }
        }
    });

    // const updateInput =({value,id})=>{ //인풋된 데이터 관리하는 함수
    //     let formCopy = state;
    //    id === 'email' ? (formCopy.form.email.value = value):(formCopy.form.password.value = value)
    //     setState(formCopy);
    //     console.log(formCopy.form.email.value);
    // }
    const onSubmit = () =>{ //원래 위에 updateInput써야하는데 그냥 야매로 만듦
        const copyState = state;
        copyState.form.email.value = textId;
        copyState.form.password.value = textPw;
        validateEmail(textId)? onSignIn(copyState.form): copyState.hasError=true ; //email유효성검사.
        //textPw === textPwCf ? onSignUp(copyState): copyState.hasError=true ;
        setState(copyState);
        //setTextId('');
        //setTextPw('');
        setTextPwCf('');
        console.log(state.form.email.value);
        console.log(state.form.password.value);
        console.log(User.auth);//user_reducer 의 auth 조회

    }
    const confirmPassword = () =>{
        return(
        state.type !== '로그인'? //상태 조회해서 비밀번호 확인 컴포넌트 불러오는 함수.
            <Input
                value ={textPwCf}
                type={state.form.confirmPassword.type}
                secureTextEntry={true}
                placeholder = {'PW-CONFIRM'}
                placeholderTextColor={'#ddd'}
                onChangeText={setTextPwCf}
            />

            :null //입력란이 아닐때만 추가
    );}
    const formHasErrors =() =>( //비밀번호 다르거나 메일 형식안맞으면 띄움.
        state.hasError ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>로그인 정보를 다시 확인해주세요</Text>
            </View>
            :null
    );
    const changeForm=()=>{ //로그인창이나 회원가입창 뜨도록함. 회원가입 버튼 토글.
        if(state.type==='로그인'){
            setState({...state,type: '등록' ,action: '등록',actionMode: '로그인화면으로'})
        } else{
            setState({...state,type:'로그인',action: '로그인',actionMode: '회원가입'})
        }


        // setState({
        //     type: type==='로그인'? '등록': '로그인',
        //     action: type==='로그인'? '등록': '로그인',
        //     actionMode: type==='회원가입'?'로그인화면으로':'회원가입'
        // })
    }


    return(
        <View>
            <Input
                value ={textId}
                type = {state.form.email.type}
                placeholder = {'ID'}
                autoCapitalize={'none'}
                keyboardType = {'email-address'}
                placeholderTextColor={'#ddd'}
                onChangeText={setTextId}
                onSubmitEditing = {onSubmit}
            />
            <Input
                value ={textPw}
                type={state.form.password.type}
                secureTextEntry={true}
                placeholder = {'PW'}
                placeholderTextColor={'#ddd'}
                onChangeText={setTextPw}
            />


            {confirmPassword()}
            {formHasErrors()}
            <View style={{marginTop: 40}}>
                <View style={styles.button}>
                    <Button
                        onPress = {onSubmit}
                        title = {state.action}
                        color ='#48567f'
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title = {state.actionMode}
                        color ='#48567f'
                        onPress={changeForm}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title = {"비회원로그인"}
                        color ='#48567f'
                        onPress={goWithoutLogin}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer:{
        marginBottom: 10,
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ee3344'
    },
    errorLabel:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlignVertical:'center',
        textAlign:'center',
    },
    button:{
        marginTop:15,
        marginBottom:10
    }

});

export default AuthForm;
