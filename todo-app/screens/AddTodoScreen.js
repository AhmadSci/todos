import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/todos', {
        text,
        completed: false,
        userId: 1 // Change this to the actual user ID
      });
      onAddTodo(response.data);
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter a new todo"
      />
      <Button
        title="Add Todo"
        onPress={handleAddTodo}
      />
    </View>
  );
};

export default AddTodo;