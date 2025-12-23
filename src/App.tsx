import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/DashboardPage'
import MainLayout from './layout/MainLayout'
import Templates from './pages/TemplatesPage'
import TemplateEdit from './pages/TemplateEditPage'
import Sequences from './pages/SequencesPage'
import Payment from './pages/PaymentPortalPage'
import Complaince from './pages/CompliancePage'
import Analytics from './pages/AnalyticsPage'
import Setting from './pages/SettingPage'
import DataImport from './pages/DataImportPage'



function App() {

  return (
    <>
  
 <Routes>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Navigate to = "/dashboard"/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='templates' element={<Templates/>}/>
    <Route path='template/edit' element={<TemplateEdit/>}/>
    <Route path='sequences' element={<Sequences/>}/>
    <Route path='payments' element={<Payment/>}/>
    <Route path='compliance' element={<Complaince/>}/>
    <Route path='analytics' element={<Analytics/>}/>
    <Route path='settings' element={<Setting/>}/>
    <Route path='data-import' element={<DataImport/>}/>

  </Route>
 </Routes>
    </>
  )
}

export default App
