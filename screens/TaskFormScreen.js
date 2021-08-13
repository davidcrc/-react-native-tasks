import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/Layout';
import {saveTask} from '../api'

const TaskFormScreen = ({navigation}) => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  // REVIEW: Interesante forma modificar un json
  const handleChange = (name, value) => {
    setTask({...task, [name]: value})
  }

  const handleSubmit = async () => {
    // console.log("la tarea", task)
    try {
      const res = await saveTask(task)
      navigation.goBack()
      
    } catch (error) {
      console.log("err save", error.message)
    }
  }

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#546574"
        onChangeText={ text => { handleChange('title', text);} }
      />
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor="#546574"
        onChangeText={ text => { handleChange('description', text);} }
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttomText}> Save Task </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginBottom: 9,
    // backgroundColor: '#fff',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    // color: '#000'
    color: '#fff',
    padding: 4,
    // textAlign: 'center',
    borderRadius: 5,
  },
  buttonSave: {
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#10ac84',
    width: '90%',
  },
  buttomText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default TaskFormScreen;
