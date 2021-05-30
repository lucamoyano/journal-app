import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //Middleware para acciones asincronas
//thunk provee el dispatch para peticiones asincrobas

import { authReducer } from '../reducer/authReducer';
import { notesReducer } from '../reducer/noteReducer';
import { uiReducer } from '../reducer/uiReducer';

//Configurar redux para desarrollo en chrome && middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})


export const store = createStore(
    //Agrego mis reducers
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);