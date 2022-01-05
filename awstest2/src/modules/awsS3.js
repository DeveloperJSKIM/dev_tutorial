import React from "react";
import {RNS3} from "react-native-upload-aws-s3";
import RNFS from 'react-native-fs';

//제목,내용 넘겨주면 S3에 txt파일로 올리는 함수
const awsS3 =(title,contents)=>{
  const path = RNFS.DocumentDirectoryPath+'/'+title+'.txt';
  RNFS.writeFile(path, contents, 'utf8')
    .then((success) => {
      console.log('FILE WRITTEN!');
    })
    .catch((err) => {
      console.log(err.message);
    });
  RNFS.readFile(path, 'ascii').then(res => {
    console.log(res);
  })
    .catch(err => {
      console.log(err.message, err.code);
    });
  async function upLoadToS3() {
    console.log('uploaded');
    const file = {
      uri: 'file://'+path,
      name: title+'.txt',
      type: 'text/txt'
    }
    const options = {
      keyPrefix: "TEST/",
      bucket:'stt-test-bucket',
      region:'ap-northeast-2',
      accessKey:'x',
      secretKey:'x',
      successActionStatus: 201
    }
    // const options = {
    //   keyPrefix: "resultTXT/",
    //   bucket: 'voice-recognition-archive',
    //   region: 'ap-northeast-2',
    //   accessKey: 'x',
    //   secretKey: 'x',
    //   successActionStatus: 201
    // }
    try{
      const response = await RNS3.put(file, options)
      if (response.status === 201){
        console.log("Success: ", response.body)

      } else {
        console.log("Failed to upload image to S3: ", response)
      }
    } catch(error){
      console.log(error)
    }
  }
  return upLoadToS3();


 }
export default awsS3;
