import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/Layout';
import { saveTask, getTask, updateTask } from '../api'

/**
 * 
 * @param {navigation} navigation
 * @param {route} route route.params tiene los parametros que se le pasen aqui
 * @returns Layout
 */
const TaskFormScreen = ({ navigation, route }) => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const [editing, setEditing] = useState(false)

  // console.log("params", route.params)
  // REVIEW: Interesante forma modificar un json
  const handleChange = (name, value) => {
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = async () => {
    // console.log("la tarea", task)
    try {

      if (!editing) {
        const res = await saveTask(task)
      }
      else {
        await updateTask(route.params.id, task)
      }
      navigation.goBack()

    } catch (error) {
      console.log("err save", error.message)
    }
  }

  const getATask = async () => {
    const task_ = await getTask(route.params.id);
    setTask({ title: task_.title, description: task_.description });
    console.log("la task", task_.title)
  }

  useEffect(() => {
    console.log(route.params)
    if (route.params && route.params.id) {
      // console.log("entra al if")
      setEditing(true)
      navigation.setOptions({ headerTitle: 'Updating a Task' })
      getATask();
    }
  }, [])

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#546574"
        onChangeText={text => { handleChange('title', text); }}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor="#546574"
        onChangeText={text => { handleChange('description', text); }}
        value={task.description}
      />
      {editing ?
        <TouchableOpacity style={styles.buttomUpdate} onPress={handleSubmit}>
          <Text style={styles.buttomText}> Edit Task </Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttomText}> Save Task </Text>
        </TouchableOpacity>
      }
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
  buttomUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: '#e58e26',
    width: '90%',
  },
});

export default TaskFormScreen;
