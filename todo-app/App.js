import React, { useState } from 'react';
import { View } from 'react-native';
import TodoList from './screens/TodoListScreen';
import AddTodo from './screens/AddTodoScreen';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <View>
      {user ? (
        <>
          <AddTodo onAddTodo={handleAddTodo} />
          <TodoList />
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Register onRegister={handleRegister} />
        </>
      )}
    </View>
  );
};

export default App;