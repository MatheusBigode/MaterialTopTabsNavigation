import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TelaA } from './src/screens/telaA';
import { TelaB } from './src/screens/telaB';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Tela A'
      screenOptions={{
        tabBarItemStyle: { marginTop: "15%"},
      }}>
        <Tab.Screen name="Tela A" component={TelaA} />
        <Tab.Screen name="Tela B" component={TelaB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}