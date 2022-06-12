import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import 'react-big-calendar/lib/sass/styles';
//import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendarMessages';
import {CalendarEvent} from './CalendarEvent'

import 'moment/locale/es'
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { clearActiveEvent, eventeSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
moment.locale('es');
const localizer = momentLocalizer(moment);



export const CalendarScreen = () => {
  const dispatch=useDispatch();
  const [lastview, setLastView] = useState(localStorage.getItem('lastView') || 'month')
  
  const {events, activeEvent}=useSelector(state=>state.calendar);
  
  const onDoubleClick=(e)=>{
  
    dispatch(uiOpenModal());
    
    dispatch(eventeSetActive(e));
    
    console.log(e);
  }
  const onSelectEvent=(e)=>{
    dispatch(eventeSetActive(e));
  }
  const onViewChange=(e)=>{
    setLastView(e);
    localStorage.setItem('lastView', e);
  }
  const onSelectSlot=(e)=>{
    dispatch(clearActiveEvent());
  }
  
  const eventStyleGetter=(event, start, end, isSelected)=>{
    console.log(event, end, start, end);
    const style={
        backgroundColor:'#fae7ff',
        borderRadius:'0px',
        opacity:0.8,
        display:'block',
        color:'#554851'
    }
    return {style};
}
  return (

    <div className='Calendar-screen'>
    <Navbar />
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100vh' }}
      messages={messages}
      eventPropGetter={eventStyleGetter}
      components={{
          event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelectEvent}
      onView={onViewChange}
      view={lastview}
      onSelectSlot={onSelectSlot}
      selectable={true}
    />
    <CalendarModal />
    <AddNewFab />
    {(activeEvent && <DeleteEventFab />)}
    
    </div>
  )
}
