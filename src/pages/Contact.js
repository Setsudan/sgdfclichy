import '../styles/Contact.css';
import Logo from '../components/img/White-Logo.png';
function Contact() {
    return (
        <div className="Contact">
            <div className="banner"> <a href="/"><img src={Logo} alt="Scouts et Guides de France" className="logo" /></a>
                <h1>Nous contacter</h1></div>
            <div className="violets block paragraph contact-groupes">
                <h2>Responsables du Groupes</h2>
                <a href="mailto:" className="mail"><i class="far fa-envelope"></i>Mail</a>
                <a href="tel:" className="phone"><i class="fas fa-phone-alt"></i>Téléphone</a>
            </div>
            <h3 className="help">Besoin d'un dépannage ?*</h3>
            <div className="compas block paragraph contact-compas">
                <h2>Compas</h2>
                <a href="mailto:" className="mail"><i class="far fa-envelope"></i>Mail</a>
                <a href="tel" className="phone"><i class="fas fa-phone-alt"></i>Téléphone</a>

            </div>
            <div className="rouges block paragraph contact-rouges">
                <h2>Rouges</h2>
                <a href="mailto:" className="mail"><i class="far fa-envelope"></i>Mail</a>
                <a href="tel:" className="phone"><i class="fas fa-phone-alt"></i>Téléphone</a>
            </div>
            <div className="infos">
                <h2>Les services que nous proposons</h2>
                <ul>
                    <li>
                        <h3 className="Baby">Baby-sitting<i class="fas fa-baby-carriage"></i></h3>
                    </li>
                    <li>
                        <h3 className="Move">Déménagement<i class="fas fa-box-open"></i></h3>
                    </li>
                    <li>
                        <h3 className="Cake">Animation<i class="fas fa-birthday-cake"></i></h3>
                    </li>
                    <li>
                        <h3>Brocante</h3>
                    </li>
                    <li>
                        <h3>Et bien d'autres</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Contact;