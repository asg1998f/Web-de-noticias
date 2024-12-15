import Form from './components/Form/Form'
import Home from './components/Home/Home'
import './App.css'
import List from './components/List/List'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/home" element={<Home/>} />
      <Route path = "/form" element={<Form/>} />
      <Route path = "/list" element={<List/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
