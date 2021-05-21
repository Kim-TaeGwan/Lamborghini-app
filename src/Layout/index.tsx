import React, {VFC} from 'react';
import styled from '@emotion/native';

interface Props {
  backgroundColor?: any;
  children: any;
}

const Container = styled.SafeAreaView({flex: 1}, props => ({
  backgroundColor: props.backgroundColor,
}));

const Layout: VFC<Props> = ({backgroundColor, children}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default Layout;
