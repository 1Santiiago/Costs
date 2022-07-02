import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Company from "./components/pages/Company.jsx";
import NewProject from "./components/pages/NewProject.jsx";
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact.jsx";
import Container from "./components/layout/Container.jsx";
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return ( 
    <Router>
    <NavBar />
      <Container classCustom="min-height">
        <Routes>
          <Route path="/" exatec element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
     <Footer />
    </Router>

  )
}

export default App;
