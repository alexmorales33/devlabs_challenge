import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18%;
  left: 5%;
  width: 90%;
  height: 80%;
  border-radius: 20px;
`;

interface VBannerProps {
  source: any;
}

export const VBanner: React.FC<VBannerProps> = ({source}) => {
  return (
    <Container>
      <Image
        source={source}
        style={{width: '100%', flex: 1, borderRadius: 20}}
      />
    </Container>
  );
};
