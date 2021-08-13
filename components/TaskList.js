// rnfe shortcode
import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';

import { deleteTask, getTasks } from '../api';
import { useIsFocused } from '@react-navigation/native';

const TaskList = props => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  // REVIEW: revisa cada vez q tengo al frente esta screen
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('loaded');
    loadTasks();
  }, [isFocused]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    // console.log("get tasks", data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks();
  }

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  // REVIEW: How use refreshing
  const onRefresh = React.useCallback(async () => {
    console.log('refrescando');
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
    console.log('dejar de refrescando');
  });

  return (
    <FlatList
      style={{
        width: '100%',
      }}
      data={tasks}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={['#78e08f']}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
