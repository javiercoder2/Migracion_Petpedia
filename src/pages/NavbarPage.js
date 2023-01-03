import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import BodyPage from '../components/Body';
import Formulario from '../components/Formulario';
import HeroSlider from '../components/HeroSlider';
import Body2 from '../components/Body2';
import Footer from '../components/Footer';


const NavbarPage = () => {
    return(
        <div>
            <Navbar/>
            <HeroSlider/>
            <BodyPage/>
            <Formulario/>
            <Body2/>
            <Footer/>
        </div>

    )
}
export default NavbarPage;