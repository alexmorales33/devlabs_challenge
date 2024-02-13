import React from 'react';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

const SubRowSelect1 = styled.View`
  padding-top: 10px;
  width: 80%;
  justify-content: center;
  align-items: flex-start;
`;

const PlaceholderSelect = styled.Text`
  padding-left: 15px;
  color: #b7b7b7;
`;

interface VSelectProps {
  placeholder: string;
  items: {label: string; value: string}[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const VSelect: React.FC<VSelectProps> = ({
  placeholder,
  items,
  selectedValue,
  onValueChange,
}) => {
  return (
    <SubRowSelect1>
      <PlaceholderSelect>{placeholder}</PlaceholderSelect>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        value={selectedValue}
        style={{
          inputIOS: {
            justifyContent: 'center',
            marginTop: 0,
            height: 40,
            color: '#fff',
          },
          inputAndroid: {
            justifyContent: 'center',
            marginTop: 0,
            height: 40,
            color: '#fff',
          },
        }}
      />
    </SubRowSelect1>
  );
};
