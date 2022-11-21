
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './port.css';
import Contact from './components/contact';
import Services from './components/services';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <Routes>
          
          <Route path="/" exact  element={<Body />}></Route>
          <Route path="/services" exact  element={<Contact />}></Route>
          <Route path="/projects"  exact  element={<Services />}></Route>
          <Route path="/contact" exact  element={<Projects />}></Route>
    
      </Routes>   
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
