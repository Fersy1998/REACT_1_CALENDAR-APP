import { configureStore} from '@reduxjs/toolkit'
import { combineReducers} from 'redux'
import { calendarReducer } from '../reducers/calendarReducer';
//import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';
//import { notesReducer } from '../reducers/notesReducer';

const reducers=combineReducers({
    //auth:authReducer,
    ui:uiReducer,
    
    calendar:calendarReducer,
    //notes:notesReducer
})

export const store=configureStore({reducer:reducers})