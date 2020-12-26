import '../styles/pages/Parents/Home.css';
import Nav from '../components/Parents/Nav';
import Age from '../components/Parents/age';
import Actv from '../components/Parents/activite';
import Footer from '../components/footer';
function Parents() {
    return (
        <div className="Parents-Home fadeIn">
            <Nav />
            <Age />
            <Actv />
            <Footer />
        </div>
    );
}

export default Parents;
