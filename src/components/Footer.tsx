import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src="/inclusive_logo.png" alt="Inclusive Trading and Finance Private Limited" className="footer__logo-img" />
                        </Link>
                        <p className="footer__tagline">
                            Professional Financial & Compliance Advisory Services
                        </p>
                        <p className="footer__legal-name">
                            <strong>Inclusive Trading and Finance Private Limited</strong>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/founder-message">Founder's Message</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Our Services</h4>
                        <ul className="footer__links">
                            <li><Link to="/iepf-share-recovery">IEPF Share Recovery</Link></li>
                            <li><Link to="/audit-assurance">Audit & Assurance</Link></li>
                            <li><Link to="/wealth-advisory">Wealth Advisory</Link></li>
                            <li><Link to="/financial-consultancy">Financial Consultancy</Link></li>
                            <li><Link to="/compliance-legal-support">Compliance & Legal</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Legal</h4>
                        <ul className="footer__links">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} Inclusive Trading and Finance Private Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
