import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { Route,Routes } from 'react-router-dom';
// import Reservation from './Components/Reservation';
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';
// import BookingForm from './Components/BookingForm';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Routes >
    <Route path='/' element={<Main/>} />
    <Route path='/about' element={<About/>} />
    {/* <Route path='/reservation' element={<Reservation/>} /> */}
    <Route path='/reservation' element={<BookingPage/>} />
    <Route path='/reservationConfirmation' element={<ConfirmedBooking/>} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
