import React from 'react';
import styled from 'styled-components/native';
import {ViewProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {VImage, VTypography} from '..';

interface VCardProps {
  coffeeType: {
    id: number;
    image: string;
    type: string;
    with: string;
    price: number;
  };
}

const CardContainer = styled.View`
  width: 47%;
  height: 200px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;

const PriceContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PriceSubContainer = styled.View<PriceSubContainerProps>`
  width: 50%;
  justify-content: center;
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;

const AddButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #c67c4e;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

interface PriceSubContainerProps extends ViewProps {
  alignItems?: string; // Esto permite que alignItems sea opcional y de tipo string
}

export const VCard: React.FC<VCardProps> = ({coffeeType}) => {
  const navigation = useNavigation();
  const handleAddButtonPress = () => {
    navigation.navigate('DetailItem', {coffeeId: coffeeType.id});
  };

  return (
    <CardContainer>
      <CardImage
        source={
          coffeeType.image === 'Coffe-1.png'
            ? require('../../../assets/images/Coffe-1.png')
            : require('../../../assets/images/Coffe-2.png')
        }
      />
      <VTypography
        fontSize="18px"
        fontWeight="600"
        color="#2f4b4e"
        marginTop="10px">
        {coffeeType.type}
      </VTypography>
      <VTypography
        fontSize="12px"
        fontWeight="400"
        color="#9B9B9B"
        marginTop="0px">
        {coffeeType.with}
      </VTypography>
      <PriceContainer>
        <PriceSubContainer alignItems="flex-start">
          <VTypography
            fontSize="18px"
            fontWeight="600"
            color="#2f4b4e"
            marginTop="0px">
            $ {coffeeType.price}
          </VTypography>
        </PriceSubContainer>
        <PriceSubContainer alignItems="flex-end">
          <AddButton onPress={handleAddButtonPress}>
            <VImage
              source={require('../../../assets/images/plus.png')}
              width={25}
              height={25}
            />
          </AddButton>
        </PriceSubContainer>
      </PriceContainer>
    </CardContainer>
  );
};
