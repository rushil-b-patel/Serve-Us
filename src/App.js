import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import ServiceProvider from "./components/ServiceProvider";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ServiceProviderCard from "./components/Card/ServiceProviderCard";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Auth/Profile";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <AuthProvider>
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
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ServiceProvider" element={<ServiceProvider />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        <Route
          path="/ServiceProviderCard"
          element={<ServiceProviderCard />}
        ></Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
