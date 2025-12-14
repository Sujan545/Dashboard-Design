import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'

import DashboardPage from './pages/DashboardPage'
import MainLayout from './layout/MainLayout'


function App() {

  return (
    <>
  
 <Routes>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Navigate to = "/dashboard"/>}/>
    <Route path='dashboard' element={<DashboardPage/>}/>

  </Route>
 </Routes>
    </>
  )
}

export default App
