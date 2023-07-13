import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
