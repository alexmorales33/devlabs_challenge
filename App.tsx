import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VDetailItem, VHome, VOnBoarding} from './src/pages';

type RootStackParamList = {
  Home: undefined;
  OnBoarding: undefined;
  DetailItem: {coffeeId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={VOnBoarding} />
        <Stack.Screen name="Home" component={VHome} />
        <Stack.Screen name="DetailItem" component={VDetailItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
