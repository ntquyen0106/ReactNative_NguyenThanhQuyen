import {TouchableOpacity,Image, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [sl, setsl] = useState(1);
  const tangSL =() =>
  {
    setsl(sl+1);
  };
  const giamSL =() =>
  {
    if(sl>1)
    {
      setsl(sl-1);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
        <Image
          style={styles.img}
          source={{uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/386/441/products/phuong-phap-giai-cac-dang-toan-thpt-nguyen-ham-tich-phan-va-ung-dung-1-2018-12-29-00-40-23.jpg?v=1595303965977'}}/>
        <Text style={{
          fontWeight:'bold',
          margin:5,
          fontSize:12,
        }}>Mã giảm giá đã lưu</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.text2}>141.800đ</Text>
          <Text style={styles.text3}>141.800đ</Text>
          <Text>
            <TouchableOpacity style={styles.butsl} onPress={giamSL}>-</TouchableOpacity>
            <Text style={styles.sl}>{sl}</Text>
            <TouchableOpacity style={styles.butsl} onPress={tangSL}>+</TouchableOpacity>
            <Text style={{
              fontWeight:'bold',
              color:'blue',
              marginLeft:50,
            }}>Mua sau</Text>
          </Text>
          <Text style={{
              fontWeight:'bold',
              marginTop:40,
              color:'blue',
            }}>Xem tại đây</Text>
        </View>
      </View>
      <View style={styles.bot}>
        <View style={styles.bot1}>
          <TouchableOpacity style={{
            alignItems:'center',
            width:175,
            padding:10,
            height:40,
            borderWidth:1,
            borderColor:'black',
            marginLeft:20,
          }}>Mã giảm giá</TouchableOpacity>
          <TouchableOpacity style={{
            padding:10,
            height:40,
            backgroundColor:'blue',
            marginLeft:30,
          }}><Text style={styles.text4}>Áp dụng</Text></TouchableOpacity>
        </View>
        <View style={styles.bot1}>
          <Text style={{
              fontSize:12,
              fontWeight:'bold',
            }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
          <Text style={{
              fontSize:12,
              fontWeight:'bold',
              color:'blue',
            }}>Nhập tại đây</Text>
        </View><View style={styles.bot2}>
          <Text style={{
              fontSize:17,
              fontWeight:'bold',
            }}>Tạm tính</Text>
          <Text style={{
                paddingLeft:150,
                fontSize:20,
                color:'#C7253E',
                fontWeight:'bold',
            }}>141.800đ</Text>
        </View>
        <View style={styles.bot3}>
          <Text style={{

              fontSize:17,
              fontWeight:'bold',
            }}>Thành tiền</Text>
          <Text style={{
                paddingLeft:150,
                fontSize:20,
                color:'#C7253E',
                fontWeight:'bold',
            }}>141.800đ</Text>
        </View>
        <TouchableOpacity
        style={{
          alignItems:'center',
          width:300,
          height:40,
          padding:10,
          marginLeft:20,
          backgroundColor:'#B8001F',
            }}><Text style={styles.text4}>TIẾN HÀNH ĐẶT HÀNG</Text></TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  top:{
    flex:4,
    flexDirection:'row',
  },
  right:{
    padding:7,
    flex:6,
  },
  bot:{
    flex:6,
  },
  left:{
    flex:4,
  },
  img:{
    marginTop:10,
    width:125,
    height:150,
    resizeMode:'contain',
  },
  text1:{
    paddingBottom:5,
    fontSize:11,
    fontWeight:'bold',
  },
  text2:{
    fontSize:20,
    color:'#C7253E',
    fontWeight:'bold',
  },
  text3:{
    textDecorationLine:'line-through'
  },
  sl:{
    padding:10,
  },
  butsl:{
    margin:3,
    padding:5,
    backgroundColor:'#AAB396'
  },
  bot1:{
    borderBottomWidth:10,
    borderColor:'#697565',
    padding:10,
    flexDirection:'row',
    justifyContent:'center'
  },
  text4:{
    fontWeight:'bold',
    color:'#F5F5F5'
  },
  bot2:{
    borderBottomWidth:70,
    borderColor:'#697565',
    padding:10,
    flexDirection:'row',
  },
  bot3:{
    borderColor:'#697565',
    padding:10,
    flexDirection:'row',
  },

});
