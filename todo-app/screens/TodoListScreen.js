import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const renderTodo = ({ item }) => (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <View>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderTodo}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;