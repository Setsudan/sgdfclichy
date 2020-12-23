import React, { useState } from 'react';
import '../styles/pages/Parents/Home.css';
import Age from './components/Parents/age';
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
                <img src="https://scoutisme.net/wp-content/uploads/sites/571/2019/05/SGDF_logo_RVB_horizontal.png" alt="Scouts et Guides de France" className="logo" />
                <span className="nav-spacer"></span>
                <ul className="nav-links">
                    <li><a href="/">Tranches d'âges</a></li>
                    <li><a href="/">L'esprit Scouts</a></li>
                    <li><a href="/">Activité</a></li>
                </ul>
                <a href="/" className="contact">Contactez-Nous</a>
            </nav>
            <Age />
        </div>
    );
}

export default Parents;
