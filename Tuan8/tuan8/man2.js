import React, { useState, useEffect } from 'react';
import {Image,  FlatList, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';

// import { FontAwesome } from '@expo/vector-icons';

const url = "https://6711af034eca2acdb5f56918.mockapi.io/xedap";

export default function xe({navigation}) {
  const [xe, setXe] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setXe(data))
      .catch(error => console.error('Lỗi:', error));
  };

  const renderXe = ({ item }) => (
    <View style={styles.xeItem}>
      <Image
        source={{ uri: item.img}}
        style={styles.image}
      />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>The World's Best Bike</Text>
      <View style={styles.chuatype}>
        <TouchableOpacity style={styles.but}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.but}><Text>Roadbike</Text></TouchableOpacity>
        <TouchableOpacity style={styles.but}><Text>Mountain</Text></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('CT')} >
        <FlatList
        data={xe}
        renderItem={renderXe}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image:{
    width:100,
    height:100,
  },
  xeItem: {
    width: 160,
    height: 160,
    backgroundColor: "#9A7E6F",
    margin:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    marginLeft:5,
    marginTop: 30,
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  chuatype: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  but: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
});
