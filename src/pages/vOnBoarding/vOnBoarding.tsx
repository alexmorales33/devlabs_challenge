import React from 'react';
import styled from 'styled-components/native';
import {VButton, VTypography} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

const backgroundImage = require('../../../assets/images/background_onboarding_3.png');

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContainerImageBackground = styled.View`
  flex: 1;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  width: 100%;
  height: 50%;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;

const TitleContainer = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

type OnBoardingScreenNavigationProp = NavigationProp<RootStackParamList>;

export function VOnBoarding() {
  const navigation = useNavigation<OnBoardingScreenNavigationProp>();

  return (
    <Container>
      <ContainerImageBackground>
        <StyledImageBackground source={backgroundImage} resizeMode="cover" />
      </ContainerImageBackground>
      <TextContainer>
        <TitleContainer>
          <VTypography
            textAlign="center"
            fontSize="38px"
            fontWeight="600"
            color="#fff"
            marginTop="0px">
            The best grain, the finest roast, the powerful flavor.
          </VTypography>
        </TitleContainer>
        <TitleContainer>
          <VTypography
            textAlign="center"
            fontSize="16px"
            fontWeight="400"
            color="#a9a9a9"
            marginTop="0px">
            The best grain, the finest roast, the powerful flavor.
          </VTypography>
        </TitleContainer>
        <VButton
          backgroundColor="primary"
          width="80%"
          height="60px"
          onPress={() => navigation.navigate('Home')}>
          Get Started
        </VButton>
      </TextContainer>
    </Container>
  );
}
