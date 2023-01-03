import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Nosotros from '../components/Nosotros';
import PerfilesNosotros from '../components/Perfiles';


const NosotrosPage = () => {
    return(
        <div>
            <Navbar/>
            <Nosotros/>
            <PerfilesNosotros/>
            <Footer/>
        </div>

    )
}
export default NosotrosPage;