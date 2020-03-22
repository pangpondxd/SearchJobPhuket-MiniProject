import React, { useState, useEffect } from 'react'
import Showjobs from './Components/Showjobs'
import ManageJob from './Components/Managejob'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import auth from './Backend/task-manager/src/middleware/auth'
const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Login />
      <Signup />
      <Showjobs />
      <ManageJob />
      
      
    </div>
  )
}
export default App