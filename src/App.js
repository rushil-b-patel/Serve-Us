import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Form' element={<Form />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
