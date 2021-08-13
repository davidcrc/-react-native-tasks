// rnfe shortcode
import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';
import { getTasks } from '../api';
const TaskList = props => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
    // console.log("get tasks", data);
  };
  useEffect(() => {
    console.log('loaded');
    loadTask();
  }, []);

  const renderItem = ({ item }) => {
    return <TaskItem task={item} />;
  };

  // REVIEW: How use refreshing
  const onRefresh = React.useCallback(async () => {
    console.log('refrescando');
    setRefreshing(true);
    await loadTask();
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
