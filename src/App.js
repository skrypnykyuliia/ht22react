// src/App.js
import React from 'react';
import Quote from './components/Quote';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Случайные цитаты</h1>
      <Quote />
    </div>
  );
}

export default App;
