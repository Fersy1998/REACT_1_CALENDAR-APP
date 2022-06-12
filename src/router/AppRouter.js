import React from 'react'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
 
    
    <BrowserRouter>
      
        <Routes>
            
            <Route path="/" element={
                <PrivateRoute>
               
                      <CalendarScreen />
              
                </PrivateRoute>
                
            }/>
            <Route 
                path="/*" 
                element={
                  
                  <PublicRoute >
                      <AuthRouter />
                  </PublicRoute>
                    
                    
            
            }/>
            
        </Routes>

    </BrowserRouter>
    )
}
