import React, {useState, useEffect} from 'react';
import {TextInput, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import spData from './sp';
export default function App() {
  const [sp, setProducts] = useState([]);
  useEffect(()=>{ 
    setProducts(spData);
  }, []);
  const renderItem = ({item}) => (
    <View style={styles.sp}>
      <Image source ={{uri:item.image}} style={styles.hinhsp}/>
      <View>
            <Text style={styles.tensp}>{item.name}</Text>
            <View style={styles.saodanhgia}>
              <FontAwesome name='star' size='14' color="yellow"/>
              <FontAwesome name='star' size='14' color="yellow"/>
              <FontAwesome name='star' size='14' color="yellow"/>
              <FontAwesome name='star' size='14' color="yellow"/>
              <FontAwesome name='star' size='14' color="#B7B7B7"/>
            </View>
            <View style={styles.saodanhgia}>
              <Text style={styles.textShop}>{item.shop}</Text>
              <Text style={styles.km}>{item.discount}</Text>
            </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
        <View style={styles.timkiem}>
          <FontAwesome name='search' size={20} color="black" style={{

          }}/>
          <TextInput style={{
            height:15,
            width:140,
          }}/>
        </View>
        <TouchableOpacity>
        <Text style={styles.chamdo}></Text>
          <FontAwesome name="shopping-cart" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-h" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        <FlatList
          data={sp}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
      <View style={styles.bot}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="home" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  km:{
    paddingTop:5,
    paddingLeft:15,
  },
  saodanhgia:{
    flexDirection:'row',

  },
  chamdo:{
    right: -5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  hinhsp:{
    marginTop:5,
    marginLeft:10,
    width:130,
    height:70,
  },
  textShop:{
    marginTop:5,
    color:'red',
  },
  timkiem:{
    padding:5,
    flexDirection:'row',
    backgroundColor:"#F5F5F7",
    width:180,
    height:30,
  },
  sp:{
    flex:1,
    margin:5,
    backgroundColor:'#D8D2C2'
  },
  top:{
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    backgroundColor: "#87A2FF",
  },
  content:{
    flex:8,
    backgroundColor: "",
  },
  bot:{
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    backgroundColor: "#87A2FF",
  },
  text1:{
    padding:10,
  },
});
