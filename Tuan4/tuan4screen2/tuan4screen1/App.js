import {TouchableOpacity,CheckBox,TextInput, View,Text, SafeAreaView, StyleSheet } from 'react-native';
import React, {useState} from  "react";
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [lowerCase, setlowerCase] = useState(false);
  const [upperCase, setupperCase] = useState(false);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        PASSWORD GENERATOR
      </Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>Password lenght <TextInput style={styles.inputlenght}/></Text>
      <View style={styles.row}> 
        <View style={styles.rowleft}> <Text style={styles.text}>Include lower case letters </Text> </View>
        <View style={styles.rowright}> <CheckBox value={lowerCase} onValueChange={setlowerCase}/></View>
      </View>
      <View style={styles.row}>
        <View style={styles.rowleft}> <Text style={styles.text}>Include upcase letters</Text> </View>
        <View style={styles.rowright}> <CheckBox value={upperCase} onValueChange={setupperCase}/></View>
      </View>
      <View style={styles.row}>
        <View style={styles.rowleft}><Text style={styles.text}>Include number</Text></View>
        <View style={styles.rowright}><CheckBox value={number} onValueChange={setnumber}/></View>
      </View>
      <View style={styles.row}>
        <View style={styles.rowleft}><Text style={styles.text}>Include special symbol</Text></View>
        <View style={styles.rowright}><CheckBox value={symbol} onValueChange={setsymbol}/></View>
      </View>
      <TouchableOpacity style={styles.but}>
        <Text style={styles.buttext}>GREATE PASSWORD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8967B3',
    alignItems:'center'
  },
  paragraph: {
    padding:30,
    marginBottom:40,
    paddingHorizontal:70,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    backgroundColor:"#795757",
    width: 300,
    height:50,
  },
  inputlenght:{
    backgroundColor:"#F5F5F5",
    height:30,
  },
  text:{
    paddingTop:10,
    fontSize:17,
    fontWeight:'bold',
  },
  row:{
    alignItems:'center',
    width:"100%",
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
  },
  rowleft:{
    flex:1,
  },
  rowright:{
    flex:1,
    alignItems:'flex-end',
  },
  but:{
    marginTop:30,
    backgroundColor:"#624E88",
    padding:20,

  },
  buttext:{
    color:"#F5F5F5",
    fontWeight:'bold',
  },
});
