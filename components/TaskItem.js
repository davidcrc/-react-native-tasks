import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// REVIEW: Important hook to get navigation
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task, handleDelete }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}> {task.title} </Text>
        <Text style={styles.itemDescription}> {task.description} </Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#78e08f',
            padding: 7,
            borderRadius: 5,
          }}
          onPress={() => {
            console.log('actualizame', task.id)
            navigation.navigate('TaskFormScreen', { id: task.id })
          }}>
          <Text> Edit </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#ee5253',
            padding: 7,
            borderRadius: 5,
          }}
          onPress={() => {
            console.log('Eliminame', task.id)
            handleDelete(task.id)
          }}
        >
          <Text> Delete </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#33333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    color: '#ffffff',
  },
  itemDescription: {
    color: '#ffffff',
  },
});

export default TaskItem;
