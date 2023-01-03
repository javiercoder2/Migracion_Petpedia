import React, { Component } from 'react';
import "./Foro.css";

export class Exito extends Component {
    render() {
        return (
<div>
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{backgroundColor: 'rgb(255, 140, 114)'}}>
          <div className="container-fluid">
            <a className="navbar-brand nav-link" target="_blank" href="Index.html">
              <img id="logoSignup"src="https://images.pexels.com/photos/1040400/pexels-photo-1040400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>

          </div>
        </nav>
        <main className="container">
          <h1>Hemos recibido su solicitud correctamente. Gracias por usar PetPedia</h1>
        </main>
      </div>
        )
    }
}

export default Exito;