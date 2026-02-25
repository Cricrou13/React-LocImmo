import logoFooter from '../../assets/images/Kasa-footer.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Logo Kasa" className="footer__logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;