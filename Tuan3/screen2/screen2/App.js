import {TextInput,TouchableOpacity , View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <View style={styles.hinh}>
      <MaterialIcons name="lock" size={100} color="black" />
      </View>
      <Text style={styles.chuLon}>FORGET PASSWORD</Text>
      <Text style={styles.chuNho}>
          Provide your account's email for which you want to reset your password
      </Text>
    </View>
    <View style={styles.input}>
      <MaterialIcons style={{marginRight:20,}} name="email" size={24} color="black" Email />
      <TextInput
      placeholder="Email"
      />
    </View>
    <View style={styles.bot}>
      <TouchableOpacity style={styles.but}>
        <Text style={styles.contentbut}>NEXT</Text>
      </TouchableOpacity> 
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7695FF',
  },
  top:{
    flex:8,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  hinh:
  {
    marginBottom:40,
  },

  chuLon:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    flexDirection:'row',
    padding:20,

  },
  chuNho:{
    fontWeight:'bold',
    justifyContent:'center',
    textAlign:'center',
    marginTop:30,
  },
  input:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'gray',
    width:250,
    height:40,
    marginLeft:45,
  },
  bot:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'7CF5FF',
    flexDirection:'row',
  },
  but:{
    backgroundColor:'yellow',
    borderRadius:15,
    marginHorizontal:50,
    paddingHorizontal:90,
    paddingVertical:15,
  },
  contentbut:{
    fontWeight:'bold',
  }
});