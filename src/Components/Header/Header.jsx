import React, { useState } from 'react';
import './header.css';

function Header() {
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    // change background Header
    

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        // when the screen is higher than 200 viewport heigh, add the scroll-header class to the header element selected 
        if (this.scrollY >= 200) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    window.addEventListener("scroll", function(){
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav .nav__menu ul li a');
        //console.log(navLi)
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(this.scrollY >= (sectionTop - sectionHeight/3)){
                current = section.getAttribute('id')    
            };
        })
        navLi.forEach(li => {
            li.classList.remove('active-link')
            if(li.classList.contains(current)){
                li.classList.add('active-link')
            }
        })
    })

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">TAAMOURT</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "home nav__link active-link" : "home nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "about nav__link active-link" : "about nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "skills nav__link active-link" : "skills nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "services nav__link active-link" : "services nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualifications" onClick={()=> setActiveNav("#qualifications")} className={activeNav === "#qualifications" ? "qualifications nav__link active-link" : "qualifications nav__link"}>
                            <i className="uil uil-award nav__icon"></i> Qualifications 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "portfolio nav__link active-link" : "portfolio nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Porfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "contact nav__link active-link" : "contact nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header