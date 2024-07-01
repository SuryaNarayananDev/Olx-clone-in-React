import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import {firestore as db}  from './firebase/config' 
import firebase from './firebase/config';
ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <App />
</FirebaseContext.Provider>
, document.getElementById('root'));
