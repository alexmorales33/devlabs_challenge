import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface VButtonProps extends TouchableOpacityProps {
  backgroundColor: 'primary' | 'secondary';
  width: string | number;
  height: string | number;
}

const buttonColorMap = {
  primary: '#C67C4E',
  secondary: '#FFFFFF',
};

const textColorMap = {
  primary: '#FFFFFF',
  secondary: '#2F4B4E',
};

const StyledButton = styled.TouchableOpacity<VButtonProps>`
  background-color: ${({backgroundColor}) => buttonColorMap[backgroundColor]};
  width: ${({width}) => width};
  height: ${({height}) => height};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const ButtonText = styled.Text<VButtonProps>`
  color: ${({backgroundColor}) => textColorMap[backgroundColor]};
  font-size: 16px;
  font-weight: 800;
`;

export const VButton: React.FC<VButtonProps> = ({
  backgroundColor,
  width,
  height,
  children,
  ...props
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      {...props}>
      <ButtonText backgroundColor={backgroundColor}>{children}</ButtonText>
    </StyledButton>
  );
};
