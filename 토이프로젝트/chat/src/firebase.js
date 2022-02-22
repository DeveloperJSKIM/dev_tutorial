//import * as firebase from 'firebase';
//버전바뀌면서 사용법 바뀜. 아래는 이전 버전문법 사용하도록 해주는 import 코드들.
import config from '../firebase.json';
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import 'firebase/firestore';

const app = firebase.initializeApp(config);

const Auth = app.auth();

export const signin = async ({email,password}) =>{
    const {user} = await Auth.signInWithEmailAndPassword(email,password);
    return user;
};

const uploadImage = async uri =>{
    if (uri.startsWith('https')) {
        return uri;
    };
    const blob = await new Promise(( resolve,reject )=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {resolve(xhr.response)};
        xhr.onerror = function () {reject(new TypeError('network request failed'));};
        xhr.responseType='blob';
        xhr.open('GET',uri,true);
        xhr.send(null);
    });
    const user = Auth.currentUser;//현재 로그인한 유저정보
    const ref = app.storage().ref(`/profile/${user.uid}/photo.png`); //파이어베이스 에 유저아이디 파일만들고 photo.png로 저장
    const snapshot = await ref.put(blob,{contentType:'image/png'});
    blob.close();

    return await snapshot.ref.getDownloadURL();
};

export const signup = async ({name,email,password,photo})=>{ //유저 생성할때
    const {user} = await Auth.createUserWithEmailAndPassword(email,password);
    const photoURL = await uploadImage(photo);
    await user.updateProfile({displayName: name,photoURL});
    return user;
};
//firebase관련 내용 정말 어렵다 모르겠다.

export const getCurrentUser = ()=>{//user정보 받아옴.
    const {uid,displayName,email,photoURL} = Auth.currentUser;
    return {uid,name:displayName,email,photo:photoURL};
};
//Profile 화면들어갔을때 user이미지 가져와서 프로필 화면에 넣어줌.
export const updateUserInfo = async photo =>{
    const photoURL = await uploadImage(photo);
    Auth.currentUser.updateProfile({photoURL});
    return photoURL;//업로드된 결과 URL반환
};

export const signout = async ()=>{ //로그아웃하기
    await Auth.signOut();
    return {};
};

export const DB = firebase.firestore();

export const createChannel = async ({title,desc})=>{
    const newChannelRef = DB.collection('channels').doc();//파이어스토어 컬렉션에서 이름이channels인것이용.
    //.doc();하면 아이디 자동으로 생성됨.
    const id = newChannelRef.id;
    const newChannel = {
        id,
        title,
        description: desc,
        createdAt: Date.now(),
    };
    await newChannelRef.set(newChannel);
    return id;//다큐먼트의 id반환.
};

//메세지 생성
export const createMessage = async ({channelId,message})=>{
    return await DB
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .doc(message._id)
        .set({
            ...message,
            createdAt:Date.now()
        });
};