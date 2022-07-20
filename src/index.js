import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {seedTypes} from "./store/seeders"
import * as DB from "./store/database"

//INIT LOCAL DB CREATE TABLES AND Fill it
DB.createDatabase();
DB.createTables();
seedTypes();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
