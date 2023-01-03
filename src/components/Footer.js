import React from 'react';
import "./Foro.css";

const Footer = () => {
    return (
      <div id='stick'>
          <footer className="bg-light text-lg-start">
            <div style={{backgroundColor: 'rgb(255, 140, 114)'}} className="py-4 text-center">
              <a role="button" className="btn btn-primary btn-lg m-2" href="/Nosotros" style={{backgroundColor: 'rgb(82, 122, 92)'}} rel="nofollow" target="_blank">
                Revisa nuestra Misión
              </a>
              <a role="button" className="btn btn-primary btn-lg m-2" style={{backgroundColor: 'rgb(82, 122, 92)'}} href="https://chile.generation.org/" target="_blank">
                Ingresa a nuestro Sponsor
              </a>
            </div>
            <hr className="m-0" />
            <div className="text-center p-3" style={{backgroundColor: 'rgb(255, 140, 159)'}}>
              © 2022 Generation 2022:
              <a className="text-dark" href="www.generation.cl">PetPetdia</a>
            </div>
          </footer>
          </div>
    );
  };
export default Footer;