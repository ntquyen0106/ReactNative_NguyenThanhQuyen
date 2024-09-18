import {TouchableOpacity , View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <View style={styles.hinh}>
      </View>
      <View>
        <Text style={styles.chuLon}>GROW YOUR BUSINESS</Text>
        <Text style={styles.chuNho}>
          We will help you to grow your business using
          online server
        </Text>
      </View>
    </View>
    <View style={styles.bot}>
      <TouchableOpacity style={styles.but}>
        <Text style={styles.contentbut}>Login</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.but}>
        <Text  style={styles.contentbut}>Sign up</Text>
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
    width:100,
    height:100,
    backgroundColor: 'black',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:75,
    backgroundColor:'#7695FF',
    borderWidth:10,
    marginBottom:75,
  },

  chuLon:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',

  },
  chuNho:{
    fontWeight:'bold',
    justifyContent:'center',
    textAlign:'center',
    marginTop:30,
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
    padding:20,
    borderRadius:15,
    marginHorizontal:50,
    paddingHorizontal:20,
    paddingVertical:15,
  },
  contentbut:{
    fontWeight:'bold',
  }
});
