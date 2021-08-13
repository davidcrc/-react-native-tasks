import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TaskItem from './TaskItem';

const TaskList = props => {
  const {tasks} = props;

  const renderItem = ({item}) => {
    // return <Text>{item.title}</Text>;
    return <TaskItem task={item} />
  };

  return (
    <FlatList
      style={{ width: '100%'}}
      data={tasks}
      keyExtractor={item => item.id.toString() }
      renderItem={renderItem}
    />
  );
};

export default TaskList;
