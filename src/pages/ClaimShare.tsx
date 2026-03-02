import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './ClaimShare.css';

const IEPFShareRecovery: React.FC = () => {
    useEffect(() => {
        document.title = 'IEPF Share Recovery – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero
                title="IEPF Share Recovery"
                subtitle="Structured Assistance for Share Recovery, Transmission & Compliance Support"
            />

            {/* Intro */}
            <SectionWrapper bg="white">
                <div className="claimshare-content">
                    <div className="claimshare-badge">
                        <span className="claimshare-badge__label">Specialized Service</span>
                    </div>
                    <p className="claimshare-lead">
                        Our IEPF Share Recovery service is focused exclusively on structured processes
                        relating to share recovery, transmission, succession documentation, and regulatory
                        coordination for shares and dividends transferred to the Investor Education and
                        Protection Fund.
                    </p>
                </div>
            </SectionWrapper>

            {/* Services */}
            <SectionWrapper bg="grey">
                <div className="section-header">
                    <h2>What We Cover</h2>
                </div>
                <div className="claimshare-grid">
                    <div className="claimshare-card">
                        <span className="claimshare-card__icon">📄</span>
                        <h3>IEPF Share Recovery</h3>
                        <p>
                            Assistance in recovering shares and dividends transferred to the Investor
                            Education and Protection Fund, with structured documentation support.
                        </p>
                    </div>
                    <div className="claimshare-card">
                        <span className="claimshare-card__icon">🔄</span>
                        <h3>Share Transmission</h3>
                        <p>
                            Support for transmission of shares following demise of the holder, including
                            succession certificate coordination and nominee documentation.
                        </p>
                    </div>
                    <div className="claimshare-card">
                        <span className="claimshare-card__icon">📋</span>
                        <h3>Succession Documentation</h3>
                        <p>
                            Structured assistance with succession-related paperwork, legal heir verification,
                            and regulatory compliance filing.
                        </p>
                    </div>
                    <div className="claimshare-card">
                        <span className="claimshare-card__icon">🏛️</span>
                        <h3>Regulatory Coordination</h3>
                        <p>
                            Coordination with registrars, depositories, and regulatory authorities for
                            smooth processing of claims and transfers.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Process */}
            <SectionWrapper bg="white">
                <div className="section-header">
                    <h2>Our Process</h2>
                </div>
                <div className="claimshare-content">
                    <ol className="claimshare-steps">
                        <li>
                            <span className="claimshare-steps__num">1</span>
                            <div>
                                <strong>Initial Assessment</strong>
                                <p>Review of holdings, eligibility, and documentation status.</p>
                            </div>
                        </li>
                        <li>
                            <span className="claimshare-steps__num">2</span>
                            <div>
                                <strong>Documentation Preparation</strong>
                                <p>Compilation and verification of all required documents.</p>
                            </div>
                        </li>
                        <li>
                            <span className="claimshare-steps__num">3</span>
                            <div>
                                <strong>Filing &amp; Coordination</strong>
                                <p>Structured filing with relevant authorities and ongoing coordination.</p>
                            </div>
                        </li>
                        <li>
                            <span className="claimshare-steps__num">4</span>
                            <div>
                                <strong>Resolution &amp; Transfer</strong>
                                <p>Final processing, transfer confirmation, and documentation closure.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper bg="navy">
                <div className="claimshare-cta">
                    <h2>Have Unclaimed Shares or Dividends?</h2>
                    <p>
                        Connect with our team for a structured assessment of your
                        recovery eligibility.
                    </p>
                    <Button to="/contact" variant="primary">Get in Touch</Button>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default IEPFShareRecovery;
