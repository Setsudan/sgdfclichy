import LogoW from './img/White-Logo.png';
function Footer() {
    return (
        <div className="footer">
            <img src={LogoW} alt="SGDF Logo" className="logo" />
            <div className="block">
                <h3>Sites des SGDF de Clichy</h3>
                <p>92110 Clichy, 94 Boulevard Jean Jaurès</p>
            </div>
        </div>
    )
}
export default Footer;