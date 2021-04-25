import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //Middleware para acciones asincronas

import { authReducer } from '../reducer/authReducer';
import { uiReducer } from '../reducer/uiReducer';

//Configurar redux para desarrollo en chrome && middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})


export const store = createStore(
    //Agrego mis reducers
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);