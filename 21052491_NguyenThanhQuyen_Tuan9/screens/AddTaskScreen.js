import React, {useState, useEffect} from 'react';
import { TextInput, Image, TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/apiSlice';

const AddTaskScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [jobName, setJobName] = useState(''); // Đổi tên biến thành jobName

  const handleAdd = () => {
    if (jobName.trim()) { // Kiểm tra nếu jobName không trống
      dispatch(addTodo({ id: Date.now().toString(), jobName })); // Gọi action addTodo
      navigation.goBack();
    }
  };

  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.hinh} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrjyN_5KaR-rZMLduB_zjXcThK6bq-fz2FA&s'}}/>
        <View style={styles.text1}>
          <Text style={styles.text1}>Hi Twinkle</Text>
          <Text>Have a great day ahead</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TaskList')}>
          <FontAwesome style={{ right: -100 }} name='arrow-left' size={20}/>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.text2}>ADD YOUR JOB</Text>
        <View style={styles.input}>
          <FontAwesome style={{ padding: 5 }} name='plus' size={20}/>
          <TextInput
            style={{ padding: 5 }}
            placeholder='Input your job'
            value={jobName}
            onChangeText={setJobName}
          />
        </View>

        <TouchableOpacity
          style={styles.but}
          onPress={handleAdd}>
  <Text style={{color: '#fff'}}>Finish -></Text>
</TouchableOpacity>

        <Image style={styles.hinh1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrjyN_5KaR-rZMLduB_zjXcThK6bq-fz2FA&s'}}/>
      </View>
    </SafeAreaView>
  );
  
};

export default AddTaskScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 8,
  },
  hinh1:{
    width:150,
    height:150,
    marginTop:50,
  },
  text2:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20,
  },
  top:{
    marginTop:30,
    flexDirection:'row',
    flex:3,
  },
  content:{
    top:-50,
    flex:7,
    alignItems:'center',
  },
  hinh:{
    borderRadius:20,
    width:50,
    height:50,
  },
  text1:{
    marginLeft:5,
    fontSize:20,
    color:"#7E60BF",
    fontWeight:"bold",
  },
  input:{
    flexDirection:'row',
    borderWidth:2,
    padding:5,
    borderRadius:10,
  },
  but:{
    backgroundColor:'#87A2FF',
    color:'#F5F5F7',
    marginTop:40,
    width:150,
    height:35,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
});
