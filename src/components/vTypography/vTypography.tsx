import React from 'react';
import styled from 'styled-components/native';

// Define las propiedades que aceptará tu componente
interface VTypographyProps {
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  children: React.ReactNode;
}

// Utiliza styled-components para definir estilos basados en las props
const StyledText = styled.Text<VTypographyProps>`
  text-align: ${({textAlign}) => textAlign || 'left'};
  font-size: ${({fontSize}) => fontSize || '14px'};
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  color: ${({color}) => color || '#000'};
  margin-top: ${({marginTop}) => marginTop || '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom || '0px'};
`;

export const VTypography: React.FC<VTypographyProps> = ({
  children,
  textAlign,
  fontSize,
  fontWeight,
  color,
  marginTop,
  marginBottom,
}) => {
  return (
    <StyledText
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      {children}
    </StyledText>
  );
};
