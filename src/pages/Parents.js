import React, { useState } from 'react';
import '../styles/pages/Parents/Home.css';
import Age from '../components/Parents/age';
import Actv from '../components/Parents/activite';
import Logo from '../components/img/SGDF-Logo.png';
import Footer from '../components/footer';
function Parents() {
    const [navBar, setNavBar] = useState(false);

    var changeBg = () => {
        if (window.scrollY >= 40) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBg);
    return (
        <div className="Parents-Home">
            <nav className={navBar ? 'top active' : 'top'} id="navigation">
                <a href="/"><img src={Logo} alt="Scouts et Guides de France" className="logo" /></a>
                <span className="nav-spacer"></span>
                <ul className="nav-links">
                    <li><a href="/">Tranches d'âges</a></li>
                    <li><a href="/">L'esprit Scouts</a></li>
                    <li><a href="/">Activité</a></li>
                </ul>
                <a href="/Contact" className="contact">Contactez-Nous</a>
            </nav>
            <Age />
            <Actv />
            <Footer />
        </div>
    );
}

export default Parents;
