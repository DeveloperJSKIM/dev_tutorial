import React,{useEffect} from "react";
import styled from "styled-components/native";
import PropType from 'prop-types';
import {Alert,Platform} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Container =styled.View`
    margin-bottom: 30px;
`;

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({theme})=>theme.imgBtnBackground};
    position: absolute;
    bottom: 0;
    right: 0;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const ButtonIcon = styled(Ionicons).attrs({
    name: 'camera-sharp',
    size: 22
})`
  color: ${({theme})=>theme.imgBtnIcon} ;
`;

const ProfileImage = styled.Image`
    background-color:${({theme})=>theme.imgBackground};
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;
const PhotoButton =({onPress})=>{//이미지 옆에 작게 나타나는 사진 추가 버튼
    return(
        <ButtonContainer onPress={onPress}>
            <ButtonIcon/>
        </ButtonContainer>);
}

//uri....오타때문에 오전내내 쌉고생함.
//shownButton이 true면 사진추가버튼 보이고 false면 안보임
const Image = ({url,showButton,onChangePhoto})=>{
    useEffect(() => {//ImagePicker 라이브러리 Usage내용 그대로 복붙
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Photo permissions','Plese turn on the camera permission.');
                }
            }
        })();
    }, []);
    const _handlePhotoBtnPress = async () => { //ImagePicker Usage 복붙
        let result = await ImagePicker.launchImageLibraryAsync({//<- 사진 조회,반환 하는 함수
            mediaTypes: ImagePicker.MediaTypeOptions.Images,//설정가능한값 미디어타입(이미지,비디오,All)
            allowsEditing: true,//수정가능하게 할 것인지 설정.
            aspect: [4, 4],//사진 비율
            quality: 1, //사진 압축 품질 0~1사이의값
        });

        console.log(result);

        if (!result.cancelled) {
            onChangePhoto(result.uri);
        }
    };
    return(
        <Container>
            <ProfileImage source={{uri:url}}/>
            {showButton&&<PhotoButton onPress={_handlePhotoBtnPress}/>}
        </Container>
    );
};
Image.defaultProps={
    url:'https://firebasestorage.googleapis.com/v0/b/chat-486e5.appspot.com/o/pepe.jpg?alt=media'
};//기본이미지 설정.

Image.propType = {
    url:PropType.string,
    showButton:PropType.bool,
    onChangePhoto:PropType.func,
};

export default Image;

