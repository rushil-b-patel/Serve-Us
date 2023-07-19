import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OtpVerification from "./components/OtpVerification";
import AuthState from "./context/AuthState";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      {/* <Router> */}
      <AuthState>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/OTPVerification" element={<OtpVerification />}></Route>
        </Routes>
        <Footer />
      </AuthState>
      {/* </Router> */}
    </>
  );
}

export default App;
