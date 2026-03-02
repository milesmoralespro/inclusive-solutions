import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

interface ServiceCardProps {
    title: string;
    description: string;
    to: string;
    icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, to, icon }) => {
    return (
        <Link to={to} className="service-card">
            <div className="service-card__accent" />
            {icon && <span className="service-card__icon">{icon}</span>}
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__desc">{description}</p>
            <span className="service-card__link">
                Learn More <span aria-hidden="true">→</span>
            </span>
        </Link>
    );
};

export default ServiceCard;
