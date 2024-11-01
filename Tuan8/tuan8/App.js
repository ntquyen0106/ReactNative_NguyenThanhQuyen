import * as React from 'react';
import {TouchableOpacity,Image,View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import batdau from './man1';
import xe from './man2';
import ct from './man3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SP">
        <Stack.Screen name='BD' component={batdau} options={{headerShown: false}}/>
        <Stack.Screen name='XE' component={xe} options={{headerShown: false}}/>
        <Stack.Screen name='CT' component={ct} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}