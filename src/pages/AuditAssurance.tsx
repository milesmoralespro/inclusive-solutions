import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './ServiceDetail.css';

const AuditAssurance: React.FC = () => {
    useEffect(() => {
        document.title = 'Audit & Assurance Services – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="Audit & Assurance"
                subtitle="Independent financial review with accuracy and transparency."
            />

            <SectionWrapper bg="white">
                <div className="service-detail">
                    <p className="service-detail__intro">
                        Our Audit &amp; Assurance services are designed to provide independent, structured
                        financial review that enhances accuracy, compliance alignment, and operational
                        transparency for businesses and individuals.
                    </p>

                    <h3>What We Offer</h3>
                    <ul className="service-detail__benefits">
                        <li>Statutory and internal audit services</li>
                        <li>Financial statement review and accuracy assessment</li>
                        <li>Compliance verification and alignment</li>
                        <li>Operational process audit</li>
                        <li>Risk assessment and documentation review</li>
                        <li>Regulatory coordination support</li>
                    </ul>

                    <h3>Our Approach</h3>
                    <p>
                        We follow a structured methodology that ensures thorough review while maintaining
                        professional independence. Every engagement begins with a comprehensive assessment
                        and ends with clear, actionable documentation.
                    </p>

                    <div className="service-detail__cta">
                        <p>Need an independent financial review?</p>
                        <Button to="/contact" variant="primary">Schedule a Consultation</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default AuditAssurance;
