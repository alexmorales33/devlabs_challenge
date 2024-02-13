import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  VBanner,
  VButton,
  VButtonOutlined,
  VImage,
  VLoader,
  VTypography,
} from '../../components';
import {Text, TouchableOpacity} from 'react-native';
import {
  FlexibleContainerProps,
  RatingRowProps,
  RootStackParamList,
  RootStackParamListDetail,
  TopRowProps,
} from '../../types/types';
import {useCoffeeDetails} from '../../hooks';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const TopDetail = styled.View`
  width: 90%;
  flex: 0.8;
  flex-direction: row;
`;

const TopRow = styled.View<TopRowProps>`
  width: 33%;
  justify-content: center;
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;

const MidDetail = styled.View`
  width: 90%;
  flex: 8;
`;

const BannerContainer = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

const TextsContainer = styled.View`
  width: 100%;
  height: 60%;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: flex-start;
`;

const RatingContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RatingRow = styled.View<RatingRowProps>`
  width: 50%;
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;

const BottomDetail = styled.View`
  flex: 1.2;
  flex-direction: row;
  width: 90%;
`;

const AddButton = styled.TouchableOpacity`
  margin-left: 5px;
  width: 40px;
  height: 40px;
  background-color: #ededed;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonRow = styled.View<RatingRowProps>`
  width: 33%;
  flex-direction: row;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;

const FlexibleContainer = styled.View<FlexibleContainerProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

type OnBoardingScreenNavigationProp = NavigationProp<RootStackParamList>;

const HeaderDetailItem = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationProp>();
  return (
    <TopDetail>
      <TopRow alignItems="flex-start">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <VImage
            source={require('../../../assets/images/Arrow.png')}
            width={25}
            height={25}
          />
        </TouchableOpacity>
      </TopRow>
      <TopRow alignItems="center">
        <VTypography
          fontSize="20px"
          fontWeight="600"
          color="#2f2d2c"
          marginTop="10px">
          Detail
        </VTypography>
      </TopRow>
      <TopRow alignItems="flex-end">
        <TouchableOpacity>
          <VImage
            source={require('../../../assets/images/Heart.png')}
            width={20}
            height={20}
          />
        </TouchableOpacity>
      </TopRow>
    </TopDetail>
  );
};

const BodyDetailItem = ({selectedCoffee}: any) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  return (
    <MidDetail>
      <BannerContainer>
        <VBanner
          source={
            selectedCoffee.image === 'Coffe-1.png'
              ? require('../../../assets/images/Coffe-1.png')
              : selectedCoffee.image === 'Coffe-2.png'
              ? require('../../../assets/images/Coffe-2.png')
              : null
          }
        />
      </BannerContainer>
      <TextsContainer>
        <TextContainer>
          <VTypography
            fontSize="20px"
            fontWeight="600"
            color="#2f2d2c"
            marginTop="0px">
            {selectedCoffee.type}
          </VTypography>
        </TextContainer>
        <TextContainer>
          <VTypography
            fontSize="12px"
            fontWeight="400"
            color="#9B9B9B"
            marginTop="0px">
            {selectedCoffee.with}
          </VTypography>
        </TextContainer>
        <RatingContainer>
          <RatingRow alignItems="center" justifyContent="flex-start">
            <VImage
              source={require('../../../assets/images/star.png')}
              width={15}
              height={15}
            />
            <VTypography
              fontSize="16px"
              fontWeight="600"
              color="#2F2D2C"
              marginTop="0px">
              {selectedCoffee.rating}
            </VTypography>
            <VTypography
              fontSize="12px"
              fontWeight="400"
              color="#9B9B9B"
              marginTop="0px">
              {`(${selectedCoffee.opinions})`}
            </VTypography>
          </RatingRow>
          <RatingRow alignItems="center" justifyContent="flex-end">
            <AddButton>
              <VImage
                source={require('../../../assets/images/grano.png')}
                width={15}
                height={15}
              />
            </AddButton>
            <AddButton>
              <VImage
                source={require('../../../assets/images/envase.png')}
                width={15}
                height={15}
              />
            </AddButton>
          </RatingRow>
        </RatingContainer>
        <TextContainer>
          <VTypography
            fontSize="16px"
            fontWeight="600"
            color="#2F2D2C"
            marginTop="10px">
            Description
          </VTypography>
          <TextContainer>
            <VTypography
              fontSize="14px"
              fontWeight="400"
              color="#9B9B9B"
              marginTop="0px">
              {selectedCoffee.description}
            </VTypography>
          </TextContainer>
        </TextContainer>
        <TextContainer>
          <VTypography
            fontSize="16px"
            fontWeight="600"
            color="#2F2D2C"
            marginTop="10px"
            marginBottom="10px">
            Size
          </VTypography>
        </TextContainer>
        <ButtonContainer>
          {selectedCoffee.size.map((size: string) => (
            <ButtonRow alignItems="center" justifyContent="center" key={size}>
              <VButtonOutlined
                variant={selectedSize === size ? 'primary' : 'secondary'}
                width="90%"
                height="50px"
                onPress={() => setSelectedSize(size)}>
                {size}
              </VButtonOutlined>
            </ButtonRow>
          ))}
        </ButtonContainer>
      </TextsContainer>
    </MidDetail>
  );
};

const FooterDetailItem = ({selectedCoffee}: any) => (
  <BottomDetail>
    <FlexibleContainer width="30%" height="100%">
      <VTypography
        fontSize="14px"
        fontWeight="400"
        color="#9B9B9B"
        marginTop="0px">
        Price
      </VTypography>
      <VTypography
        fontSize="18px"
        fontWeight="600"
        color="#C67C4E"
        marginTop="0px">
        $ {selectedCoffee.price}
      </VTypography>
    </FlexibleContainer>
    <FlexibleContainer width="70%" height="100%">
      <VButton backgroundColor="primary" width="90%" height="60px">
        Buy Now
      </VButton>
    </FlexibleContainer>
  </BottomDetail>
);

export function VDetailItem() {
  const route = useRoute<RouteProp<RootStackParamListDetail, 'DetailItem'>>();
  const {coffeeId} = route.params;

  const {selectedCoffee, error} = useCoffeeDetails(Number(coffeeId));

  if (error) {
    return (
      <Container>
        <Text>Error: {error}</Text>
      </Container>
    );
  }

  if (!selectedCoffee) {
    return (
      <Container>{error ? <Text>Error: {error}</Text> : <VLoader />}</Container>
    );
  }

  return (
    <Container>
      <HeaderDetailItem />
      <BodyDetailItem selectedCoffee={selectedCoffee} />
      <FooterDetailItem selectedCoffee={selectedCoffee} />
    </Container>
  );
}
