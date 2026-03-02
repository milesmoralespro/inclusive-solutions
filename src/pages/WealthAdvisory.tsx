import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './ServiceDetail.css';

const WealthAdvisory: React.FC = () => {
    useEffect(() => {
        document.title = 'Wealth Advisory – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="Wealth Advisory"
                subtitle="Strategic guidance for asset protection and long-term stability."
            />

            <SectionWrapper bg="white">
                <div className="service-detail">
                    <p className="service-detail__intro">
                        Our Wealth Advisory services provide strategic guidance for individuals and families
                        seeking structured asset protection, financial planning, and long-term stability
                        through disciplined advisory processes.
                    </p>

                    <h3>What We Offer</h3>
                    <ul className="service-detail__benefits">
                        <li>Asset protection and structuring strategies</li>
                        <li>Long-term financial planning and oversight</li>
                        <li>Investment documentation and compliance review</li>
                        <li>Succession and estate planning support</li>
                        <li>Family wealth governance frameworks</li>
                        <li>Risk-aligned portfolio advisory</li>
                    </ul>

                    <h3>Our Approach</h3>
                    <p>
                        We take a disciplined, documentation-first approach to wealth advisory. Our focus
                        is on creating transparent structures that protect and grow wealth while maintaining
                        full regulatory compliance.
                    </p>

                    <div className="service-detail__cta">
                        <p>Ready to protect and structure your wealth?</p>
                        <Button to="/contact" variant="primary">Schedule a Consultation</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default WealthAdvisory;
