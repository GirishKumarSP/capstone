import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/about' element={<About/>} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
