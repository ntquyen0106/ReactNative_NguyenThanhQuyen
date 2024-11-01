import {TouchableOpacity, View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function batdau({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        top:-30,
      }}>
        <Text>A premium online store for</Text>
      <Text>sporter and their stylish choice</Text>
      </View>
      <View style={styles.chuaanh}>
        <Image 
          source={{ uri: "https://vn1.vdrive.vn/maruishi-cycle.vn/2023/10/Xe-dap-tre-em-Nishiki-Angel-18-inches-2.png" }} 
          style={styles.image}
        />
      </View>
      <Text style={styles.text1}>POWER BIKE</Text>
      <Text style={styles.text1}>SHOP</Text>
      <TouchableOpacity style={styles.but} onPress={()=> navigation.navigate('XE')}>Get started</TouchableOpacity>
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
  text1:{
    fontSize:20,
    fontWeight:'bold',
  },
  chuaanh: {
    backgroundColor:"#FFA24C",
    width:250,
    height:250,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  but:{
    color:'#FEF9F2',
    borderRadius:10,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    width:300,
    height:30,
    backgroundColor:'red',
  },
  image: {
    width: 200,
    height: 200,
  },
});
