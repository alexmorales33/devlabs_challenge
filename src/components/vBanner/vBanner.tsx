import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Animated} from 'react-native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18%;
  left: 5%;
  width: 90%;
  height: 80%;
  border-radius: 20px;
`;

interface VBannerProps {
  source: any;
}

export const VBanner: React.FC<VBannerProps> = ({source}) => {
  // Crear una referencia para el valor animado de la opacidad
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Configurar y empezar la animación de la opacidad
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true, // Usar el driver nativo para mejor performance
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacityAnim]);

  return (
    <Container>
      <Animated.Image
        source={source}
        style={[
          {
            width: '100%',
            flex: 1,
            borderRadius: 20,
            backgroundColor: '#c67c4e',
          },
          {opacity: opacityAnim}, // Aplicar la opacidad animada al estilo
        ]}
      />
    </Container>
  );
};
