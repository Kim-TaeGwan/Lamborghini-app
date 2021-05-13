import React, {VFC} from 'react';
import styled from '@emotion/native';
import {StyleProp} from 'react-native';

const LayoutCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const OriginCenter = styled.View`
  flex: 1;
`;

interface Props {
  center?: boolean;
  originCenter?: boolean;
  children: any;
  style: StyleProp<any>;
}

const Container: VFC<Props> = ({children, originCenter, center, style}) => {
  return (
    <>
      {center && <LayoutCenter style={style}>{children}</LayoutCenter>}
      {originCenter && <OriginCenter>{children}</OriginCenter>}
    </>
  );
};

export default Container;
