import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const url = 'https://66ff40222b9aac9c997ead69.mockapi.io/job';

export default function EditJob({ route, navigation }) {
  const { jobId } = route.params; // Nhận ID của công việc cần chỉnh sửa
  const [jobName, setJobName] = useState('');

  // Lấy thông tin công việc khi màn hình được mở
  useEffect(() => {
    fetch(`${url}/${jobId}`)
      .then(response => response.json())
      .then(data => setJobName(data.jobName))
      .catch(error => console.error('Error fetching job:', error));
  }, [jobId]);

  // Hàm cập nhật công việc
  const updateJob = () => {
    fetch(`${url}/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobName }),
    })
      .then(response => response.json())
      .then(() => {
        console.log('Job updated');
        navigation.goBack();
      })
      .catch(error => console.error('Error updating job:', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Job</Text>
      <TextInput
        style={styles.input}
        value={jobName}
        onChangeText={setJobName}
        placeholder="Edit job name"
      />
      <TouchableOpacity style={styles.button} onPress={updateJob}>
        <Text style={styles.buttonText}>Update Job</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
