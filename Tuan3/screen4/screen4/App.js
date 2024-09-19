import {TextInput,TouchableOpacity , View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
export default function App() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.chuLon}>LOGIN</Text>
      <View style={styles.inputname}>
      <MaterialIcons style={{marginRight:20,}} name="person" size={24} color="black"  />
      <TextInput
      placeholder="Name"
      />
    </View>
    <View style={styles.inputpass}>
      <MaterialIcons style={{marginRight:20,}} name="lock" size={24} color="black" />
      <TextInput
      placeholder="Password"
      secureTextEntry = {!isPasswordVisible}
      />
      <TouchableOpacity onPress={()=> setPasswordVisibility(!isPasswordVisible)}>
      <MaterialIcons name={isPasswordVisible?"visibility":"visibility-off"} size={24} color="black  "/>
      </TouchableOpacity>
    </View>
    </View>
    <View style={styles.bot}>
      <TouchableOpacity style={styles.but}>
        <Text style={styles.contentbut}>LOGIN</Text>
      </TouchableOpacity> 
            <Text style={styles.chuNho}>
         GREATE ACCOUNT</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C96868',
  },
  top:{
    flex:8,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  chuLon:{
    paddingBottom:200,
    paddingRight:200,
    fontSize:30,
    fontWeight:'bold',
    flexDirection:'row',
    padding:20,

  },
  chuNho:{
    fontWeight:'bold',
    justifyContent:'center',
    textAlign:'center',
    marginTop:10,
  },
  inputname:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'gray',
    width:250,
    height:40,
    marginLeft:20,
  },
  inputpass:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'gray',
    width:250,
    height:40,
    marginLeft:20,
  },
  bot:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'7CF5FF',
  },
  but:{
    backgroundColor:'black',
    borderRadius:15,
    marginHorizontal:50,
    paddingHorizontal:90,
    paddingVertical:15,
  },
  contentbut:{
    color:"#F5F5F5",
    fontWeight:'bold',
  }
});