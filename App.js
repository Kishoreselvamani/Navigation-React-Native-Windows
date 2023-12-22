import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from './Component/LoginScreen';
import SuccessScreen from './Component/SuccessScreen';
import ProductScreen from './Component/ProductScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{headerBackTitle: '', headerBackTitleVisible: true}}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            headerBackTitle: '',
            headerBackTitleVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
