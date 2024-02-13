import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Container = styled.View`
  flex: 1;
`;

const FooterContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  flex-direction: row;
`;

const FooterItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 20px;
  height: 20px;
`;

type RootStackParamList = {
  Home: undefined;
  Heart: undefined;
  Bag: undefined;
  Notification: undefined;
  OnBoarding: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface VFooterProps {
  navigation: HomeScreenNavigationProp;
}

export const VFooter: React.FC<VFooterProps> = ({navigation}) => {
  const handleNavigate = (routeName: keyof RootStackParamList) => {
    navigation.navigate(routeName);
  };

  return (
    <Container>
      <FooterContainer>
        <FooterItem>
          <TouchableOpacity onPress={() => handleNavigate('OnBoarding')}>
            <Image source={require('../../../assets/images/Home.png')} />
          </TouchableOpacity>
        </FooterItem>
        <FooterItem>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/Heart_footer.png')}
            />
          </TouchableOpacity>
        </FooterItem>
        <FooterItem>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/Bag.png')} />
          </TouchableOpacity>
        </FooterItem>
        <FooterItem>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/Notification.png')}
            />
          </TouchableOpacity>
        </FooterItem>
      </FooterContainer>
    </Container>
  );
};
