import React,{useEffect,useState} from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Fontisto";
import DocumentPicker, { DocumentPickerResponse, DirectoryPickerResponse, isInProgress, types } from "react-native-document-picker";
import theme from "../theme";

const Container = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${theme.mainColor};
  margin: 20px;
  border: 2px solid #FFFFFF;
`;

  const PlusButton =({onCreateItem})=>{
    const [result, setResult] = useState();
    useEffect(() => {
      console.log(JSON.stringify(result, null, 2))
    }, [result]);
  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }


  return(
    <TouchableOpacity onPress={async () => {
      try {
        const pickerResult = await DocumentPicker.pickSingle({
          presentationStyle: 'fullScreen',
          copyTo: 'cachesDirectory',
        })
        setResult([pickerResult]);
        onCreateItem(pickerResult.name,pickerResult.fileCopyUri);
      } catch (e) {
        handleError(e)
      }
    }}>
    <Container>
      <Icon name="plus-a" size={30} color='#FFFFFF'/>
    </Container>
    </TouchableOpacity>
  );
}

export default PlusButton;
