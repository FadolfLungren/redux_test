import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
//import {appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import {configureStore} from "@reduxjs/toolkit";

const defaultState = {
    cash:5,
    message:'your mom is gay'
}

const appReducer = (state = defaultState, action) =>{
    switch(action.type){
        case "ADD":
            return {...state, cash: state.cash + action.payload}
        case "GET":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
const rootReducer = combineReducers({
    app:appReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App />
</Provider>
);

