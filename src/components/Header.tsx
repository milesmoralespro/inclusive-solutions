import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
    { label: 'Home', to: '/' },
    {
        label: 'About',
        to: '/about-us',
        children: [
            { label: 'About Us', to: '/about-us' },
            { label: "Founder's Message", to: '/founder-message' },
        ],
    },
    {
        label: 'Services',
        to: '/services',
        children: [
            { label: 'IEPF Share Recovery', to: '/iepf-share-recovery' },
            { label: 'Audit & Assurance', to: '/audit-assurance' },
            { label: 'Wealth Advisory', to: '/wealth-advisory' },
            { label: 'Financial Consultancy', to: '/financial-consultancy' },
            { label: 'Compliance & Legal', to: '/compliance-legal-support' },
        ],
    },
    { label: 'Contact', to: '/contact' },
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__inner container">
                <Link to="/" className="header__logo">
                    <img src="/inclusive_logo.png" alt="Inclusive Trading and Finance Private Limited" className="header__logo-img" />
                </Link>

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__menu">
                        {navLinks.map((link) => (
                            <li
                                key={link.to}
                                className={`header__menu-item ${link.children ? 'header__menu-item--dropdown' : ''}`}
                            >
                                <Link
                                    to={link.to}
                                    className={`header__link ${location.pathname === link.to ? 'header__link--active' : ''}`}
                                >
                                    {link.label}
                                    {link.children && <span className="header__caret">▾</span>}
                                </Link>
                                {link.children && (
                                    <ul className="header__dropdown">
                                        {link.children.map((child) => (
                                            <li key={child.to}>
                                                <Link
                                                    to={child.to}
                                                    className={`header__dropdown-link ${location.pathname === child.to ? 'header__dropdown-link--active' : ''}`}
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
};

export default Header;
