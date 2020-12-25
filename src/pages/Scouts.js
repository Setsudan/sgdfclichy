import React, { useState } from 'react';
import '../styles/pages/Scouts/Home.css'
import Logo from '../components/img/SGDF-Logo.png';
function Scouts() {
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
        <div className="Scouts">
            <nav className={navBar ? 'top active' : 'top'} id="navigation">
                <a href="/"><img src={Logo} alt="Scouts et Guides de France" className="logo" /></a>
                <span className="nav-spacer"></span>
                {/* <ul className="nav-links">
                    <li><a href="/">Scouts Guides</a></li>
                    <li><a href="/">Pio-Ca</a></li>
                    <li><a href="/">Compas</a></li>
                    <li><a href="/">Violets</a></li>
                </ul> */}
                <h3>On arrive bientôt !</h3>
                <a href="/" className="contact">Contactez-Nous</a>
            </nav>
        </div>
    );
}

export default Scouts;
