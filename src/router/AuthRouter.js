import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AuthRouter = () => {
    return (
        
        <div className='auth__main'>
            <div className='auth__box-container'>
           
                <Routes>
                          <Route exact path='/auth/' element={<CalendarScreen/>}/>
                          <Route exact path='/auth/*' element={<LoginScreen/>}/>
    
                </Routes>
    
            </div>
        </div>
      )
}
