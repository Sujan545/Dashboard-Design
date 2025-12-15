import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/DashboardPage'
import MainLayout from './layout/MainLayout'
import Templates from './pages/TemplatesPage'
import TemplateEdit from './pages/TemplateEditPage'


function App() {

  return (
    <>
  
 <Routes>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Navigate to = "/dashboard"/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='templates' element={<Templates/>}/>
    <Route path='template/edit' element={<TemplateEdit/>}/>

  </Route>
 </Routes>
    </>
  )
}

export default App
