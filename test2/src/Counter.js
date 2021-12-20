import React from 'react';
import styled from "styled-components/native";
import {Btn} from './components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <Container>
      <StyledText>{number}</StyledText>
      <Btn
        title={"onIncrease"}
        onPress={onIncrease}
      />
    </Container>
  );
}

export default Counter;
