import 'react-native-gesture-handler'; // Đặt ở đầu file
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './screens/IntroScreen'; // Đảm bảo import đúng
import TaskListScreen from './screens/TaskListScreen'; // Đảm bảo import đúng
import EditTaskScreen from './screens/EditTaskScreen'; // Đảm bảo import đúng
import AddTaskScreen from './screens/AddTaskScreen'; // Đảm bảo import đúng
import store from './redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen name="Intro" component={IntroScreen} options={{ title: 'Welcome', headerShown: false }} />
          <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Task List',headerShown: false}} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} options={{ title: 'Edit Task'}} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add New Task', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
