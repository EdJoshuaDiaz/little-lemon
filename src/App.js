import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Menu from "./components/Pages/Menu";
import Reservation from "./components/Pages/Reservation";
import Order from "./components/Pages/Order";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservation" element={<Reservation/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
