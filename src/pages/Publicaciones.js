import React, {  useEffect, useState } from "react";
import { getAllPost } from "../services/Post";
 import { Testimonio } from "../components";
 import './Publicacion.css';
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';
 

  
  const PublicacionesPage = () => {
  
    const [state, setState] = useState([]);
  
    useEffect(()=>{
      getPost();
    },[])
  
    const getPost = async()=>{
      const postBD = await getAllPost();
      setState(postBD);
    }
  
  
  
    return (
        <div class="container mt-3">
            <div>
    <Navbar />
    </div>
    <div>
        <Testimonio Posts={state} />
        <Footer/>
        </div>
                </div>
    );
  };
export default PublicacionesPage;