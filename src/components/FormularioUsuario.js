import React, { Component } from 'react';
import CuentaUsuario from './CuentaUsuario';
import Exito from './Exito';
import "./Foro.css";
import ConfirmacionCuenta from './ConfirmacionCuenta';
 

export class Form extends Component {
    state = {
   paso: 1,
   name: "",
   email: "",
   password:"",
    };


    siguienteAccion = () => {
        const { paso } = this.state;
        this.setState({ paso: paso + 1 });
    };

    anteriorAccion = () => {
        const { paso } = this.state;
        this.setState({ paso: paso - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { paso} = this.state;
        const { name, email, password} = this.state;
        const values = { name, email, password};

        switch (paso) {
            case 1:
                return (
                    <CuentaUsuario
                        siguienteAccion={this.siguienteAccion}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
                
            case 2:
                return (
                    <ConfirmacionCuenta
                    siguienteAccion={this.siguienteAccion}
                    anteriorAccion={this.anteriorAccion}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Exito/>
                ); 
        }
    }
}

export default Form;