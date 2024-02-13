import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface VButtonProps extends TouchableOpacityProps {
  variant: 'primary' | 'secondary'; // Cambiado a `variant` para claridad
  width: string | number;
  height: string | number;
}

const buttonBackgroundColorMap = {
  primary: '#FFF5EE',
  secondary: '#fff',
};

const buttonBorderColorMap = {
  primary: '#C67C4E',
  secondary: '#DEDEDE',
};

const textColorMap = {
  primary: '#C67C4E',
  secondary: '#2F2D2C',
};

const StyledButton = styled.TouchableOpacity<VButtonProps>`
  background-color: ${({variant}) => buttonBackgroundColorMap[variant]};
  border: 1px solid ${({variant}) => buttonBorderColorMap[variant]};
  width: ${({width}) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({height}) =>
    typeof height === 'number' ? `${height}px` : height};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const ButtonText = styled.Text<VButtonProps>`
  color: ${({variant}) => textColorMap[variant]};
  font-size: 16px;
  font-weight: 800;
`;

export const VButtonOutlined: React.FC<VButtonProps> = ({
  variant,
  width,
  height,
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} width={width} height={height} {...props}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </StyledButton>
  );
};
