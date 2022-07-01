import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import NewProject from './components/pages/NewProject.jsx';
import Contact from './components/pages/Contact.jsx'

function App() {
  <Router>
    <ul>
      <li>Home</li>
      <li>Contato</li>
    </ul>
    <Routes>
      <Route path='/' exact element ={<Home />}/>

      <Route path='/company' element={ <Company />}  /> 

      <Route path='/contact' element={<Contact />} />

      <Route path='/newproject' element={<NewProject />} / >
    </Routes>

    <p>Footer</p>
  </Router>
}

export default App;
