import React, {useState, useEffect} from 'react';
import { TextInput, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function batdau({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.hinh} source={{uri:'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/2023/02/hinh-nen-phi-hanh-gia-01.jpg'}}/>
      <Text style={styles.text1}>
        MANAGE YOUR
      </Text>
      <Text style={styles.text1}>
        TASK
      </Text>
      <View style={styles.input}> 
        <FontAwesome style={{
          padding:5,
        }} name='envelope' size='20' color='#B7B7B7'/>
        <TextInput
          style={{
            padding:5,
          }}
          placeholder='Enter your name'
          placeholderTextColor='#B7B7B7'
        />
      </View>
      <TouchableOpacity style={styles.but} onPress={()=> navigation.navigate('CN')} >GET STARTED -></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  hinh:{
    top:-50,
    width:200,
    height:200,
  },
  text1:{
    fontSize:20,
    color:"#7E60BF",
    fontWeight:"bold",
  },
  input:{
    marginTop:30,
    flexDirection:'row',
    borderWidth:2,
    padding:5,
    borderRadius:10,
  },
  but:{
    backgroundColor:'#87A2FF',
    color:'#F5F5F7',
    marginTop:40,
    width:150,
    height:35,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',

  },
});
