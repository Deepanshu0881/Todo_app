// src/App.js
import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000'; // Replace with your backend URL

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
