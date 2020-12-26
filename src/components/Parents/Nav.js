import React, { useState } from 'react';
import Logo from '../img/SGDF-Logo.png';
import { Link } from "react-scroll";

function Nav() {
    /*     Animation de la barre de navigations
 */    const [navBar, setNavBar] = useState(false);

    var changeBg = () => {
        if (window.scrollY >= 40) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBg);
    return (<div className="Nav">
        {/* vérifie l'état de la barre de navigation */}
        <nav className={navBar ? 'top active' : 'top'} id="desktop-nav">
            <a href="/"><img src={Logo} alt="Scouts et Guides de France" className="logo" /></a>
            <span className="nav-spacer"></span>
            <ul className="nav-links">
                <li><Link onActiveClass="Active" to="all-ages" spy={true} smooth={true} offset={-70} duration={300}>Les Tranches d'âges</Link></li>
                <li><Link onActiveClass="Active" to="Activites" spy={true} smooth={true} offset={-70} duration={600}>Les Activitées</Link></li>
            </ul>
            <a href="/Contact" className="contact">Contactez-Nous</a>
        </nav>
        <nav id="phone-nav">
            <ul>
                <li>
                    <i class="fas fa-birthday-cake"></i><Link>Ages</Link>
                </li>
                <li>
                    <i class="fas fa-hiking"></i><Link>Activitées</Link>
                </li>
                {/* <li>
                    <Link></Link>
                </li> */}
            </ul>
        </nav>
    </div>
    )
}
export default Nav;