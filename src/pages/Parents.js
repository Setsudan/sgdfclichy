import '../styles/pages/Parents/Home.css'
function Parents() {
    return (
        <div className="Parents-Home">
            <nav className="top">
                <img src="https://scoutisme.net/wp-content/uploads/sites/571/2019/05/SGDF_logo_RVB_horizontal.png" alt="Scouts et Guides de France" className="logo" />
                <span className="nav-spacer"></span>
                <ul className="nav-links">
                    <li><a href="/">Tranches d'âges</a></li>
                    <li><a href="/">L'esprit Scouts</a></li>
                    <li><a href="/">Activité</a></li>
                </ul>
                <a href="/" className="contact">Contactez-Nous</a>
            </nav>
            <div className="Parents-Body">
                <div className="banner all-ages">
                    <h1>Les Tranches D'Ages</h1>
                </div>
                <div className="block">
                    <div className="paragraph block tranches-dage">
                        <div className="farfa section">
                            <h2>Farfa</h2>
                            <h3>5-8ans</h3>
                        </div>
                        <div className="oranges section">
                            <h2>Oranges</h2>
                            <h3>8-11ans</h3>
                        </div>
                        <div className="bleus section">
                            <h2>Bleus</h2>
                            <h3>11-14ans</h3>
                        </div>
                        <div className="rouges section">
                            <h2>Rouges</h2>
                            <h3>14-17ans</h3>
                        </div>
                        <div className="compas section">
                            <h2>Compas</h2>
                            <h3>17-20ans</h3>
                        </div>
                        <div className="violets section">
                            <h2>Violets</h2>
                            <h3>+18ans</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const top = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        top.classList.add('full-width');
    } else {
        top.classList.remove('full-width');

    }
})
export default Parents;
