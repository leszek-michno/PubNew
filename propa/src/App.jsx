

import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import MainPl from './pagesPL/MainPl'
import NewsPl from './pagesPL/NewsPl'
import ContactPl from './pagesPL/ContactPl'
import MenuPl from './pagesPL/MenuPl'
import Gallery from './pagesPL/Gallery'
import MainEng from './pagesEng/MainEng'
import NewsEng from './pagesEng/NewsEng'
import ContactEng from './pagesEng/ContactEng'
import MenuEng from './pagesEng/ManuEng'
import NavBar from './components/NavBar'

function App() {

  return (
    
       <Router>
        <div className='container'> 
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<MainPl/>} />
            <Route path="/Aktualności" element={<NewsPl/>} />
            <Route path="/Kontakt" element={<ContactPl/>} />
            <Route path="/Menu" element={<MenuPl/>} />
            <Route path="/Galeria" element={<Gallery/>} />
            <Route path="English Version" element={<MainEng/>} />
            <Route path="/News" element={<NewsEng/>} />
            <Route path="/Contact" element={<ContactEng/>} />
            <Route path="/Menu" element={<MenuEng/>} />             
          </Routes>
        </div>
        <Footer/>
        </div>
      </Router>
      

    
  )
}

export default App
