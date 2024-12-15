import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Form from "./Components/Pages/Form";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit-form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App