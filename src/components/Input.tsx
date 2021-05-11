import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const Contaienr = styled.View`
  flex-direction: column;
  width: 100%;
`;

const Input = styled.TextInput`
  background-color: ${({theme}) => theme.inputColor};
  border-radius: 5px;
  };
`;

const TextInput = () => {
  return (
    <Contaienr>
      <Input />
    </Contaienr>
  );
};

export default TextInput;
