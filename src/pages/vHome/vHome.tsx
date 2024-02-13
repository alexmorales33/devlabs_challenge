import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {
  VBanner,
  VCard,
  VFooter,
  VImage,
  VLoader,
  VSelect,
} from '../../components';
import {VInput} from '../../components';
import {Provinces, products} from '../../data/data';
import {useFilteredCoffeeTypes} from '../../hooks';
import {Text} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 9;
  width: 100%;
`;

const TopContent = styled.View`
  width: 100%;
  flex: 2.5;
  background-color: #131313;
  justify-content: center;
  align-items: center;
`;

const MidContent = styled.View`
  width: 100%;
  flex: 2.5;
`; //border: 1px solid red;

const BottomContent = styled.View`
  width: 100%;
  flex: 5;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  height: 60px;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const VScrollView = styled.ScrollView`
  width: 85%;
  flex: 2;
`;

const DScrollView = styled.ScrollView`
  height: 20%;
  width: 100%;
`;

const Button = styled.TouchableOpacity<{selected: boolean}>`
  border-radius: 10px;
  width: 80px;
  height: 35px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({selected}) => (selected ? '#C67C4E' : '#FFFFFF')};
`;

const ButtonText = styled.Text<{selected: boolean}>`
  color: ${({selected}) => (selected ? '#fff' : '#2F4B4E')};
`;

const ProductContainer = styled.View`
  flex: 8;
  height: 80%;
  width: 90%;
`;

const SubContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const BlackContainer = styled.View`
  padding-bottom: 30px;
  flex: 1;
  background-color: #131313;
`;

const WhiteContainer = styled.View`
  flex: 1;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const RowSelect = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SubRowSelect2 = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const CardRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export function VHome() {
  // eslint-disable-next-line prettier/prettier
  const [selectedProvince, setSelectedProvince] = useState<string>('Buenos Aires');
  const {
    selectedProduct,
    searchTerm,
    filteredCoffeeTypes,
    handleProductSelection,
    handleSearchChange,
    error,
  } = useFilteredCoffeeTypes();
  const navigation = useNavigation();

  if (error) {
    return (
      <Container>
        <Text>Error: {error}</Text>
      </Container>
    );
  }

  if (!selectedProduct) {
    return (
      <Container>{error ? <Text>Error: {error}</Text> : <VLoader />}</Container>
    );
  }

  return (
    <Container>
      <ContentContainer>
        <TopContent>
          <SubContent>
            <RowSelect>
              <VSelect
                placeholder="Location"
                items={Provinces}
                selectedValue={selectedProvince}
                onValueChange={(value: string) => setSelectedProvince(value)}
              />
              <SubRowSelect2>
                <VImage
                  source={require('../../../assets/images/Image.png')}
                  width={55}
                  height={55}
                />
              </SubRowSelect2>
            </RowSelect>
          </SubContent>
          <SubContent>
            <VInput
              onFilterPress={() => {}}
              onChange={handleSearchChange}
              searchTerm={searchTerm}
            />
          </SubContent>
        </TopContent>
        <MidContent>
          <BlackContainer>
            <Overlay />
          </BlackContainer>
          <WhiteContainer>
            <Overlay />
          </WhiteContainer>
          <VBanner source={require('../../../assets/images/Banner.png')} />
        </MidContent>
        <BottomContent>
          <VScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ButtonContainer>
              {products.map(product => (
                <Button
                  key={product.id}
                  selected={selectedProduct === product.id}
                  onPress={() => handleProductSelection(product.id)}>
                  <ButtonText selected={selectedProduct === product.id}>
                    {product.name}
                  </ButtonText>
                </Button>
              ))}
            </ButtonContainer>
          </VScrollView>
          <ProductContainer>
            <DScrollView>
              <CardContainer>
                <CardRow>
                  {filteredCoffeeTypes.map((coffee, index) => (
                    <VCard key={index} coffeeType={coffee} />
                  ))}
                </CardRow>
              </CardContainer>
            </DScrollView>
          </ProductContainer>
        </BottomContent>
      </ContentContainer>
      <VFooter navigation={navigation} />
    </Container>
  );
}
