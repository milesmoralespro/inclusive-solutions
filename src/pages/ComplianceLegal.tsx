import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './ServiceDetail.css';

const ComplianceLegal: React.FC = () => {
    useEffect(() => {
        document.title = 'Compliance & Legal Support – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="Compliance & Legal Support"
                subtitle="Structured regulatory and legal advisory services."
            />

            <SectionWrapper bg="white">
                <div className="service-detail">
                    <p className="service-detail__intro">
                        Our Compliance &amp; Legal Support services are designed to help businesses and
                        individuals navigate regulatory requirements with confidence and structured
                        documentation.
                    </p>

                    <h3>What We Offer</h3>
                    <ul className="service-detail__benefits">
                        <li>Regulatory compliance assessment and advisory</li>
                        <li>Legal documentation review and structuring</li>
                        <li>Corporate governance support</li>
                        <li>Compliance framework implementation</li>
                        <li>Regulatory filing and coordination support</li>
                        <li>Policy development and review</li>
                    </ul>

                    <h3>Our Approach</h3>
                    <p>
                        We offer structured compliance and legal advisory that prioritizes clarity,
                        documentation accuracy, and proactive regulatory alignment. Our team works
                        closely with clients to ensure every process meets applicable standards.
                    </p>

                    <div className="service-detail__cta">
                        <p>Need compliance or legal advisory support?</p>
                        <Button to="/contact" variant="primary">Schedule a Consultation</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default ComplianceLegal;
