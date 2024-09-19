import {TouchableOpacity , View, Text, SafeAreaView,TextInput, StyleSheet } from 'react-native';
import React from 'react';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <View style={styles.hinh}>
      CODE
      </View>
      <View>
        <Text style={styles.chuLon}>VERIFICATION</Text>
        <Text style={styles.chuNho}>
          Enter ontime password sent on ++0123456789
        </Text>
      </View>
      <View style={styles.inputRow}>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
      </View>
    </View>
    <View style={styles.bot}>
      <TouchableOpacity style={styles.but}>
        <Text style={styles.contentbut}>VERIFI CODE</Text>
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
    fontSize:70,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30
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
  inputRow:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
    paddingTop:30
  },
  input:{
     width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
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