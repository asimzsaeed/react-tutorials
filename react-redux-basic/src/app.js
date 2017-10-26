import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import  Layout   from './app/containers/layout';


const myLogger = (store) => (next) => (action) => {
    console.log('My Logger>>', action);
    next(action);
}

const initialState = {
    result: 1,
    lastValues: []
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues,  action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues,  action.payload]
            }
            break;
    }

    return state;
}

const initialUserState = {
    name: "Max",
    age: 27,
    lastValues: []
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
                lastValues: [...state.lastValues,  action.payload]
            }
            break;
            case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
                lastValues: [...state.lastValues,  action.payload]
            }
            break;
        
    }

    return state;
}


const store = createStore(
    combineReducers({math: mathReducer, user: userReducer}), 
    {}, 
    applyMiddleware(myLogger, createLogger())
);

store.subscribe(() => {
    console.log('Store updpated>>', store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 1
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 32
});


store.dispatch({
    type: "SET_AGE",
    payload: 62
});


store.dispatch({
    type: "SET_NAME",
    payload: "66 Turo Garderns"
});



render(
    <Provider store={ store } > 
        <Layout />
    </Provider>, 
    window.document.getElementById('app')
);