import * as React from 'react';
import {TouchableOpacity,Image,View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import batdau from './man1';
import canhan from './man2';
import add from './man3';
import EditJob from './EditJob'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SP">
        <Stack.Screen name='BD' component={batdau} options={{headerShown: false}}/>
        <Stack.Screen name='CN' component={canhan} options={{headerShown: false}}/>
        <Stack.Screen name='ADD' component={add} options={{headerShown: false}}/>
        <Stack.Screen name="EditJob" component={EditJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}