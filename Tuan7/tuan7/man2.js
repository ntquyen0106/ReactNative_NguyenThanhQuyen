import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const url = 'https://66ff40222b9aac9c997ead69.mockapi.io/job';

export default function Canhan({ navigation }) {
  const [job, setJobs] = useState([]);

  // Hàm lấy dữ liệu từ API
  const fetchJobs = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  };

  // Hàm xóa công việc
  const deleteJob = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      console.log('Job deleted');
      fetchJobs(); // Cập nhật lại danh sách công việc sau khi xóa
    })
    .catch(error => console.error('Error deleting job:', error));
  };

  useEffect(() => {
    fetchJobs();
    const unsubscribe = navigation.addListener('focus', fetchJobs);
    return unsubscribe;
  }, [navigation]);

  const renderJob = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobName}>{item.jobName}</Text>
      <View style={styles.icon}>
        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('EditJob', { jobId: item.id })}>
          <FontAwesome name="edit" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteJob(item.id)}>
          <FontAwesome name="trash" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('BD')}>
          <FontAwesome style={{ marginRight: 100, marginLeft: 10 }} name='arrow-left' size={20} />
        </TouchableOpacity>
        <Image style={styles.hinh} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrjyN_5KaR-rZMLduB_zjXcThK6bq-fz2FA&s' }} />
        <View style={styles.text1}>
          <Text>Hi Twinkle</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.input}>
          <FontAwesome style={{ padding: 5 }} name='search' size={20} />
          <TextInput
            style={{ padding: 5 }}
            placeholder='Search'
          />
        </View>

        <FlatList
          data={job}
          renderItem={renderJob}
          keyExtractor={item => item.id.toString()}
        />

        <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('ADD')}>+</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 8,
  },
  jobItem: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: '#B7B7B7',
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
  },
  top: {
    marginTop: 30,
    flexDirection: 'row',
    flex: 3,
  },
  content: {
    top: -50,
    flex: 7,
    alignItems: 'center',
  },
  hinh: {
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  text1: {
    fontSize: 20,
    color: "#7E60BF",
    fontWeight: "bold",
  },
  input: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
  but: {
    fontWeight: 'bold',
    backgroundColor: '#87A2FF',
    color: '#F5F5F7',
    marginTop: 40,
    width: 50,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
