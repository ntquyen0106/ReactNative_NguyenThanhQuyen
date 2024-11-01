import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <View style={styles.jobItem}>
      <Text>{task.jobName}</Text>
      <View style={styles.icon}>
        <TouchableOpacity style={{ marginRight: 20 }} onPress={onEdit}>
          <FontAwesome name="edit" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="trash" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default TaskItem;
