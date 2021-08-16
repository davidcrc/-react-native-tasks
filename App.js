import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Tasks App',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: {color: '#ffffff'},
            headerRight: () => (
              <Icon
                style={{backgroundColor: '#222f3e', textAlign: 'center', color: '#ffffff'}}
                name="add-to-list"
                size={32}
                onPress={() => {
                  navigation.navigate('TaskFormScreen');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'Create a Task',
            headerStyle: {
              backgroundColor: '#222f3e',
            },
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
