import React from 'react';
import './PageHero.css';

interface PageHeroProps {
    title: string;
    subtitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
    return (
        <section className="page-hero">
            <div className="container">
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageHero;
