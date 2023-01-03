import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import BusquedaPage from "./pages/Busqueda";
import NavbarPage from "./pages/NavbarPage";
import SignupPage from "./pages/Signup";
import RegistroPage from "./pages/Registro";
import NosotrosPage from "./pages/NosotrosPage";
import PublicacionesPage from "./pages/Publicaciones";
import PruebaPage from "./pages/PruebaPage";
import Home from "./pages/Home";

const App = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavbarPage/>}/>
                <Route path="/Signup" element={<SignupPage/>}/>
                <Route path="/Registro" element={<RegistroPage/>}/>
                <Route path="/Nosotros" element={<NosotrosPage/>}/>
                <Route path="/Busqueda" element={<BusquedaPage/>}/>
                <Route path="/Publicaciones" element={<PublicacionesPage/>}/>
                <Route path="/Prueba" element={<PruebaPage/>}/>
                <Route path="/Home" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export  default App;