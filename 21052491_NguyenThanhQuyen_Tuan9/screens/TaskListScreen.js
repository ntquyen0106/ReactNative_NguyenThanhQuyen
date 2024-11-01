import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { fetchTodos, deleteTodo } from '../redux/apiSlice';

const TaskListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
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

        <FlatList style={{
          height:350,
        }}
        data={todos}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEdit={() => navigation.navigate('EditTask', { taskId: item.id })}
            onDelete={() => dispatch(deleteTodo(item.id))}
          />
        )}
        keyExtractor={item => item.id.toString()} // Vẫn giữ id như một chuỗi
      />
        <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('AddTask')}>+</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default TaskListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 8,
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
    top: -30,
  },
  but: {
    marginTop:20,
    fontWeight: 'bold',
    backgroundColor: '#87A2FF',
    color: '#F5F5F7',
    width: 50,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

