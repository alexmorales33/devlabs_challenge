import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  spinner: {
    transform: [{scale: 1.5}],
  },
});

export const VLoader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#C67C4E" style={styles.spinner} />
    </View>
  );
};
