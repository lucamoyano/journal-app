import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducer/authReducer'

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    //Agrego mis reducers
    reducers, 
    //Configurar redux para desarrollo en chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);