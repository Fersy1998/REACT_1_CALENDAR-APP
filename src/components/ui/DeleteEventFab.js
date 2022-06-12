import React from 'react'
import { useDispatch } from 'react-redux'
import { clearActiveEvent, eventDeleted } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(eventDeleted());
    }
  return (
    <button className='btn btn-danger fab-danger' onClick={handleClick}><i className='fa fa-trash'></i>Borrar Evento</button>
  )
}
