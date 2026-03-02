import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './ServiceDetail.css';

const FinancialConsultancy: React.FC = () => {
    useEffect(() => {
        document.title = 'Financial Consultancy – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="Financial Consultancy"
                subtitle="Practical advisory for financial structuring and compliance clarity."
            />

            <SectionWrapper bg="white">
                <div className="service-detail">
                    <p className="service-detail__intro">
                        Our Financial Consultancy services provide practical advisory support for individuals
                        and businesses that require structured financial guidance and clarity in compliance
                        alignment.
                    </p>

                    <h3>What We Offer</h3>
                    <ul className="service-detail__benefits">
                        <li>Business financial structuring and planning</li>
                        <li>Individual financial advisory services</li>
                        <li>Compliance clarity and regulatory guidance</li>
                        <li>Documentation and process optimization</li>
                        <li>Financial reporting structure setup</li>
                        <li>Strategic business advisory</li>
                    </ul>

                    <h3>Our Approach</h3>
                    <p>
                        We provide practical, actionable financial guidance without jargon or complexity.
                        Every recommendation is structured for clarity and aligned with applicable regulatory
                        requirements.
                    </p>

                    <div className="service-detail__cta">
                        <p>Looking for structured financial guidance?</p>
                        <Button to="/contact" variant="primary">Schedule a Consultation</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default FinancialConsultancy;
