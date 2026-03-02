import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
    useEffect(() => {
        document.title = 'Our Services – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="Our Services"
                subtitle="Structured advisory across asset recovery, audit, wealth management, and financial consultancy."
            />

            <SectionWrapper bg="white">
                <div className="section-header">
                    <h2>What We Offer</h2>
                    <p>Explore our core advisory verticals, each designed with discipline and regulatory clarity.</p>
                </div>
                <div className="services-grid">
                    <ServiceCard
                        icon="🔍"
                        title="IEPF Share Recovery"
                        description="Specialized assistance in recovery of shares and dividends transferred to IEPF, transmission procedures, succession support, and structured compliance coordination."
                        to="/iepf-share-recovery"
                    />
                    <ServiceCard
                        icon="📊"
                        title="Audit & Assurance"
                        description="Independent review and structured financial assessment services focused on accuracy, compliance alignment, and operational transparency."
                        to="/audit-assurance"
                    />
                    <ServiceCard
                        icon="💼"
                        title="Wealth Advisory"
                        description="Strategic guidance for asset protection, structured planning, and long-term financial stability."
                        to="/wealth-advisory"
                    />
                    <ServiceCard
                        icon="📋"
                        title="Financial Consultancy"
                        description="Practical advisory support for individuals and businesses requiring financial structuring and compliance clarity."
                        to="/financial-consultancy"
                    />
                    <ServiceCard
                        icon="⚖️"
                        title="Compliance & Legal Support"
                        description="Structured compliance guidance and legal advisory services to help businesses meet regulatory requirements with clarity and confidence."
                        to="/compliance-legal-support"
                    />
                </div>
            </SectionWrapper>
        </main>
    );
};

export default Services;
