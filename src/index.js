import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
var addValue=1;
root.render(
  <React.StrictMode>
    <App />
    <h1>functional</h1>
    <FunctionalComponent name={'prasath'} age={20} addValue={addValue}/>
    <h1>ClassComponent</h1>
    <ClassComponent/>
  </React.StrictMode>
);

