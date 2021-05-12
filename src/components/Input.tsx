import React from 'react';
import styled from '@emotion/native';
import Email from '../assets/icons/LoginEmail';
import Password from '../assets/icons/LoginPassword';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

const InputContainer = styled.View`
  background-color: #bfbfbf;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 17px 15px;
  &:first-child {
    margin-bottom: 20px;
  }
`;

const InputImage = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

const Input = styled.TextInput`
  background-color: ${({theme}) => theme.inputColor};
  border-radius: 5px;
  font-size: 15px;
  };
`;

const TextInput = () => {
  return (
    <Container>
      <InputContainer>
        <InputImage>
          <Email />
        </InputImage>
        <Input placeholder="Email address" />
      </InputContainer>
      <InputContainer>
        <InputImage>
          <Password />
        </InputImage>
        <Input placeholder="Password" />
      </InputContainer>
    </Container>
  );
};

export default TextInput;
