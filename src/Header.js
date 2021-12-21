import React from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import $ from "jquery"
import VideoHeader from './video/11.mp4';

import './header.css'


window.onload = function(){   

    var btnMenu = document.getElementById('icon-menu');
    var nav = document.getElementById('nav1');
    
     btnMenu.addEventListener('click', function(){
         nav.classList.toggle('mostrar');
     })
     $('.scroll').on('click', function(event){
        if(this.hash !==''){
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate(
            {
              scrollTop: $(hash).offset().top
            },
            800
          );
        }
      }); 
  }

function Header() {
    return (
        
        <div className='header'>
            <div className='header_flex'>
                <div className='logo'>
                <div id="icon-menu"><FontAwesomeIcon icon={faBars}/>&nbsp;&nbsp;</div>
                    <h2>Titulo</h2>
                </div>
                <nav className='nav' id='nav1'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div>
                    <div className='social_icons'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MrHalley-102855138569929"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;
                       <Link to="/"><FontAwesomeIcon icon={faYoutube}/></Link>
                       </div>
                </div>
            </div>
            <div className='header_wallpaper'>  
                <video className='videoTag' autoPlay loop muted>
                <source src={VideoHeader} type='video/mp4' />
                </video> 
        </div>
        </div>
    )
}

export default Header
