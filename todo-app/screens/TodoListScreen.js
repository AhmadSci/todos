import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const API_URL = 'http://localhost:3000';

export default function TodoListScreen() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const renderTodo = ({ item }) => (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{item.text}</Text>
      <Text style={styles.todoStatus}>{item.completed ? 'Completed' : 'Pending'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  todoText: {
    fontSize: 18,
  },
  todoStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});