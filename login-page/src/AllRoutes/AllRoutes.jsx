import React from 'react'
import {Routes,Route}from "react-router-dom"
import Login from '../Components/Login'
import ChartBoard from '../Components/ChartBoard'
import PrivateRoute from '../Components/PrivateRoute'

export default function AllRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/graph" element={<PrivateRoute><ChartBoard /></PrivateRoute> } />
        </Routes>
    </div>
  )
}
