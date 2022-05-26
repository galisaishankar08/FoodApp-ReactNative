import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// You can import from local files
import HomeScreen from './components/mainScreen';
import FoodListScreen from './components/foodlistScreen';


const Root = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Root.Navigator
        screenOptions={{
        headerShown: true
        }}
      >     
        <Root.Screen name="Home" component={HomeScreen} 
        options={{ 
          title:"Food List",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
          }}
        />
        <Root.Screen name="FinalFoodList" component={FoodListScreen} 
        options={{ 
          title:"Final Food List",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

