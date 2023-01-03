import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/FormularioUsuario';

const SignupPage = () => {
    return(
        <div class="container mt-3">
            <div>
            <Navbar/>
            </div>
            <div>
            <Form/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
}
export default SignupPage;