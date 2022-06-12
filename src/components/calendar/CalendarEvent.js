import React from 'react'

export const CalendarEvent = ({event}) => {
    const {title, user, bgcolor}=event;

  return (
    <div style={{backgroundColor:bgcolor}}><strong>{title}</strong>
    <strong>-{user.name}</strong>
    </div>
    
  )
}
