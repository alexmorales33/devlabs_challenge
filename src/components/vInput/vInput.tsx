import React from 'react';
import styled from 'styled-components/native';

const InputContainer = styled.View`
  width: 90%;
  height: 85%;
  background-color: #313131;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const InputBox = styled.View`
  width: 60%;
  height: 100%;
`;

const InputField = styled.TextInput`
  color: #fff;
  width: 100%;
  height: 100%;
`;

const LogoBox = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const FilterButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: #c67c4e;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

interface VInputProps {
  onFilterPress: () => void;
  onChange: (text: string) => void; // Agregar la propiedad onChange
  searchTerm: string;
}

export const VInput: React.FC<VInputProps> = ({
  onFilterPress,
  onChange,
  searchTerm,
}) => {
  return (
    <InputContainer>
      <LogoBox>
        <Image
          source={require('../../../assets/images/Search.png')}
          width={20}
          height={20}
        />
      </LogoBox>
      <InputBox>
        <InputField
          placeholder="Search Coffe"
          placeholderTextColor="#989898"
          value={searchTerm}
          onChangeText={onChange}
        />
      </InputBox>
      <LogoBox>
        <FilterButton onPress={onFilterPress}>
          <Image
            source={require('../../../assets/images/furnitur-icon.png')}
            width={25}
            height={25}
          />
        </FilterButton>
      </LogoBox>
    </InputContainer>
  );
};
