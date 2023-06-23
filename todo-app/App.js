import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TodoListScreen from './screens/TodoListScreen';

const Stack = createStackNavigator();

export default function App() {
  const [accessToken, setAccessToken] = useState('');

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setAccessToken={setAccessToken} />}
          </Stack.Screen>
          <Stack.Screen name="Register" component={RegisterScreen} /> */}
          <Stack.Screen name="TodoList">
            {(props) => <TodoListScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});