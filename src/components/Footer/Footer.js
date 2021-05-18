import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillWeiboCircle, AiFillWeiboSquare, AiOutlinePhone, AiOutlineWeibo, AiOutlineWhatsApp } from "react-icons/ai";
import './Footer.css'

export default function Footer() {
  return (
    <footer
      style={{ position: "sticky", marginTop: 80 }}
    >
      <div className= "col-12 m-auto p-5" style={{backgroundColor: " #2D2D2A"}}>
        <div className="row">
       
          <div className="col-2">
            <h5>Contacto:</h5>
            <br/>
            <ul>
              <li>
                <a
                  style={{color: "#787D8F"}}
                  href="https://github.com/JairoPonti"
                >
                  <AiFillGithub style={{color: "#7124d3"}} />{" "}
                  GitHub
                </a>
                <li>
                <a
                  style={{color: "#787D8F"}}
                  href="https://github.com/JairoPonti"
                >
                  <AiFillLinkedin style={{color: "#7124d3"}} />{" "}
                  LinkedIn
                </a>
                </li>
              </li>
              <li>
                <a
                    style={{color: "#787D8F"}}
                  href="https://wa.me/5491131090584"
                >
                  <AiOutlineWhatsApp  style={{color: "#7124d3"}} />{" "}
                  WhatsApp
                </a>
              </li>         
            </ul>
          </div>
          <div  className="col-2" style={{marginTop: "54px"}}> 
            <ul>
            <li>
                <a
                    style={{color: "#7124D3"}}
                  href="https://portfolio-web-jairoponti.herokuapp.com"
                >
                 
                  Portfolio Web
                </a>
              </li>
              <li>
              
               jairomponti@gmail.com </li>
            </ul>
            </div>
          <div className="col-4" style={{marginLeft: "280px"}}>
            <h5 class="white-text">Buscador Omdb</h5>
            <br/>
            <p >
              Esta página fue desarrollada por Jairo M. Ponti
            </p>
            <br/>
            <h6> © 2021 Copyright </h6>
          </div>
        </div>
      </div>
    
    </footer>
  );
}
