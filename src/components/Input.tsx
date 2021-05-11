import React from 'react';
import styled from '@emotion/native';
import Email from '../assets/icons/LoginEmail';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: #bfbfbf;
  border-radius: 5px;
`;

const InputImage = styled.View`
  width: 20px;
  height: 20px;
`;

const Input = styled.TextInput`
  background-color: ${({theme}) => theme.inputColor};
  border-radius: 5px;
  };
`;

const TextInput = () => {
  return (
    <Container>
      <InputContainer>
        <InputImage>
          <Email />
        </InputImage>
        <Input />
      </InputContainer>
    </Container>
  );
};

export default TextInput;
