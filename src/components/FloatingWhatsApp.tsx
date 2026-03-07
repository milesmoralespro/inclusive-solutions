import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp: React.FC = () => {
    // Replace this with your actual WhatsApp phone number including country code
    // e.g., '919000000000'
    const phoneNumber = '919000000000';
    const message = 'Hello! I would like to know more about your services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="floating-whatsapp__icon" />
        </a>
    );
};

export default FloatingWhatsApp;
