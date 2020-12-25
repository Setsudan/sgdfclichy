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
            <h3>Besoin d'un dépannage ?*</h3>
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
        </div>
    )
};
export default Contact;