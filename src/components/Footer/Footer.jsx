import logoFooter from '../../assets/images/logo Footer.svg';

function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Logo Kasa" className="footer__logo" loading='lazy'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;