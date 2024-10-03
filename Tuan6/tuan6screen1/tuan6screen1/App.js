import React, {useState, useEffect} from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import spData from './sp';
;
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
      <Text style={styles.textShop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.butChat}>
        <Text style={{color:'#F5F5F7'}}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
        <Text style={{color:'#F5F5F7'}}>Chat</Text>
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={20} color="#F5F5F7"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        <FlatList
          data={sp}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
  hinhsp:{
    width:70,
    height:70,
  },
  textShop:{
    marginTop:5,
    color:'red',
    
  },
  butChat:{
    marginTop:20,
    marginRight:10,
    alignItems:"center",
    backgroundColor:"red",
    height:35,
    padding:5,
    width:70,
  },
  sp:{
    justifyContent:'space-between',
    margin:2,
    flexDirection:'row',
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
