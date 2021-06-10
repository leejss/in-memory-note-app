import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NoteProvider} from './contexts/NoteContext';
import AddScreen from './screens/AddScreen';
import HomeScreen from './screens/HomeScreen';
import ModScreen from './screens/ModScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="Mod" component={ModScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}
