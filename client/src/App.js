import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import QuotePage from './components/QuotePage.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'
import './style.css'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/public"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/" > 
            <Profile />
          </ProtectedRoute> } />
        <Route 
          path="/public"
          element={<ProtectedRoute token={token} redirectTo="/"> 
          <Public />
        </ProtectedRoute> } />

        <Route 
          path="/quotepage"
          element={<ProtectedRoute token={token} redirectTo="/">
            <QuotePage />
        </ProtectedRoute> } />
      </Routes>
    </div>
  )
}