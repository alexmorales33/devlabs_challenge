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
  animateOpacity?: boolean; // Prop adicional para controlar la animación
}

export const VBanner: React.FC<VBannerProps> = ({
  source,
  animateOpacity = true,
}) => {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (animateOpacity) {
      // Si animateOpacity es true, anima entre 0.7 y 1
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacityAnim, {
            toValue: 0.7,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      // Si animateOpacity es false, establece la opacidad en 1 sin animación
      opacityAnim.setValue(1);
    }
  }, [animateOpacity, opacityAnim]);

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
          {opacity: opacityAnim}, // Aplica la opacidad animada al estilo
        ]}
      />
    </Container>
  );
};
