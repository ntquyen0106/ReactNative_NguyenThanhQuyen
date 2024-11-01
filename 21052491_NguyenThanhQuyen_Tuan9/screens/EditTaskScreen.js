import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../redux/apiSlice';

const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const dispatch = useDispatch();
  const task = useSelector(state => state.todos.find(todo => todo.id === taskId));
  
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.jobName); // Đặt giá trị tiêu đề dựa trên jobName
    }
  }, [task]);

  const handleSave = () => {
    if (task) { // Kiểm tra nếu task tồn tại
      dispatch(editTodo({ id: taskId, jobName: title })); // Gọi action editTodo
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Job</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Edit job name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Update Job</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default EditTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#87A2FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

