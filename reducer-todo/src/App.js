import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoContainer from './components/TodoContainer'

function App() {
  return (
    <div className="App">
    <div>Notepad</div>
    <TodoContainer/>
    </div>
  );
}

export default App;
