import React from "react";
import styled from "styled-components/native";
//화면 넘어갈때 뱅뱅도는 화면. 다른거 터치못하게하고 도는 에니메이션만 보여줌.
const Container = styled.View`
  position: absolute;
  z-index: 2;
  opacity: 0.3;
  width:100%;
  height: 100%;
  justify-content: center;
  background-color: ${({theme})=>theme.spinnerBackground};
`;

const Indicator = styled.ActivityIndicator.attrs(({theme})=>({
    size:'large',
    color: theme.spinnerIndicator
}))``;

const Spinner = ()=>{
    return(
        <Container><Indicator/></Container>

    );
};

export default Spinner;