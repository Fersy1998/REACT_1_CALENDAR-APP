import moment from 'moment';

import { types } from '../types/types';
const initialState={
    events:[{
        id:new Date().getTime(),
        title:'Día del niño',
        start:moment().toDate(),
        end:moment().add(2, 'hours').toDate(),
        bgcolor:'#d3c7fd',
        notes:'Comprar piñata',
        user:{
          uid:'1232w4324',
          name:'Fersy'
        },
    },],
    activeEvent:null
}

export const calendarReducer = (state=initialState, action) => {
  switch (action.type) {
      case types.eventSetActive:
          return {
            ...state,
            activeEvent:action.payload
          
          }
    case types.eventeAddNew:
        return {
            ...state,
            events:[...state.events, action.payload]
        }

    case types.eventUpdated:
        return {
            ...state,
            events:state.events.map(e=>(e.id===action.payload.id ? action.payload :e))
        }
    case types.eventClearActiveEvent:
        return {
            ...state,
            activeEvent:null
            
        }
    case types.eventDeleted:
        return {
            ...state,
            events:state.events.filter(e=>(e.id!==state.activeEvent.id)),
            activeEvent:null
        }
      default:
          return state;
  }
}
