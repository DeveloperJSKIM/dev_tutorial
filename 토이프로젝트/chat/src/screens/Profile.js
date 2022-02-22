import React,{useContext,useState} from "react";
import styled from "styled-components/native";
import {Button,Image,Input} from "../components";
import {UserContext} from "../contexts";
import {getCurrentUser,updateUserInfo,signout} from "../firebase";
import {Alert} from "react-native";
import {ProgressContext} from "../contexts";//spinner
import {ThemeContext} from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=>theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Profile=({navigation,route})=>{
    const {spinner} = useContext(ProgressContext); //로딩중화면
    const {setUser}=useContext(UserContext); //user데이터 불러오기
    const user = getCurrentUser(); //firebase에서 가져온 user정보
    console.log(route.params);

    const [photo,setPhoto]=useState(user.photo);//프로필 사진 변경위함. 기본값은 firebase에서가져온 user사진.
    const theme = useContext(ThemeContext);

    const _handlePhotoChange = async url =>{ //url파라미터로 전달받음.
        try{
            spinner.start();
            const photoURL = await updateUserInfo(url); //updateUserInfo함수로 사진업로드
            setPhoto(photoURL);//반환된 URL로 photo상태변수 바꿈.
        } catch (e){
            Alert.alert('Photo Error',e.message);

        } finally {
            spinner.stop();
        }
    }
    return(
        <Container>
            <Image showButton url={photo} onChangePhoto={_handlePhotoChange}/>
            <Input label={"Name"} value={user.name} disabled/>
            <Input label={"Email"} value={user.email} disabled/>
            <Button
                title={"Sign out"}
                onPress={async ()=>{
                    try {
                        spinner.start();
                        await signout();
                    } catch (e) {
                        
                    }finally {
                        setUser({});
                        spinner.stop();
                    }
                    }}
                containerStyle={{
                    backgroundColor: theme.btnSignout,
                }}
            />
        </Container>
    );
};

export default Profile;