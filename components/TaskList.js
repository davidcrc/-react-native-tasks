import React from 'react'
import { View, Text, FlatList} from 'react-native'

const TaskList = (props) => {
  const {tasks} = props
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id +''}
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>;
      }}
    />
  )
}

export default TaskList
