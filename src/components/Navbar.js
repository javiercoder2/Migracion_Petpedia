import React from "react";
import "./Foro.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>PetPedia</title>
      <link href="/" rel="stylesheet" type="text/css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
          style={{ backgroundColor: "rgb(138, 183, 79)" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand nav-link" target="_blank" href="/">
              <img src="images/logosPetpediaBlanco-05.png" className="logo1" />
            </a>
            <a className="navbar-brand nav-link" target="_blank" href="/">
              <strong>PetPedia</strong>
            </a>
            {/*         col-md-12 offset-3 para centrar algo
             */}{" "}
            <a className="nav-link" href="/Busqueda">
              Busca tu Veterinaria
            </a>
            <a className="nav-link" href="/Publicaciones" rel="nofollow" target="me-2,">
              Publica aqui
            </a>
            <a
              className="nav-link"
              href="/Nosotros"
              rel="nofollow"
              target="me-2,"
            >
              Nosotros
            </a>
            <DropdownButton id="dropdown-basic-button" title="">
              <Dropdown.Item href="/Publicaciones">Ver Publicaciones</Dropdown.Item>
              <Dropdown.Item href="/Nosotros">
                Ver Acerca de Nosotros
              </Dropdown.Item>
              <Dropdown.Item href="https://chile.generation.org/">
                Ver Nuestro Sponsor
              </Dropdown.Item>
            </DropdownButton>
            <div className="py-6 text-lg-center">
              <a
                role="button"
                className="btn btn-success btn-primary"
                href="Signup"
                rel="nofollow"
                target="_blank"
              >
                Login
              </a>
              <a
                role="button"
                className="btn btn-danger btn-primary"
                href="Registro"
                target="_blank"
              >
                Registro
              </a>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light"
                type="submit"
                style={{ backgroundColor: "rgb(255, 140, 114)" }}
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
