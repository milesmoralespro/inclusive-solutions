import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './About.css';

const About: React.FC = () => {
    useEffect(() => {
        document.title = 'About Us – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero title="About Inclusive Solutions" subtitle="A Structured Financial & Compliance Advisory Firm" />

            {/* Company Intro */}
            <SectionWrapper bg="white">
                <div className="about-content">
                    <p className="about-lead">
                        Inclusive Solutions, operating under Inclusive Trading, is a professional advisory firm
                        providing structured services across asset recovery, audit &amp; assurance, wealth
                        advisory, and financial consultancy.
                    </p>
                    <p>
                        Our foundation is built on clarity, regulatory understanding, and documentation discipline.
                        We focus on structured execution rather than transactional shortcuts, ensuring every
                        engagement aligns with applicable compliance frameworks.
                    </p>
                </div>
            </SectionWrapper>

            {/* Philosophy */}
            <SectionWrapper bg="grey">
                <div className="section-header">
                    <h2>Our Philosophy</h2>
                </div>
                <div className="about-content">
                    <p className="about-lead">In financial and compliance matters, precision matters.</p>
                    <p>We believe advisory services must be guided by:</p>
                    <ul className="about-values">
                        <li><span className="about-values__check">✔</span> Integrity in representation</li>
                        <li><span className="about-values__check">✔</span> Transparency in process</li>
                        <li><span className="about-values__check">✔</span> Clarity in documentation</li>
                        <li><span className="about-values__check">✔</span> Professional accountability</li>
                        <li><span className="about-values__check">✔</span> Respect for client confidentiality</li>
                    </ul>
                    <p>Our role is to simplify complexity while maintaining regulatory discipline.</p>
                </div>
            </SectionWrapper>

            {/* Areas of Advisory */}
            <SectionWrapper bg="white">
                <div className="section-header">
                    <h2>Our Areas of Advisory</h2>
                </div>
                <div className="about-areas">
                    <div className="about-area">
                        <h3>Asset Recovery &amp; Compliance Support</h3>
                        <p>
                            Delivered through our IEPF Share Recovery service, we assist clients with
                            structured processes relating to share recovery, transmission, succession
                            documentation, and regulatory coordination.
                        </p>
                    </div>
                    <div className="about-area">
                        <h3>Audit &amp; Assurance</h3>
                        <p>
                            Independent and structured financial review services designed to enhance accuracy,
                            transparency, and procedural confidence.
                        </p>
                    </div>
                    <div className="about-area">
                        <h3>Wealth Advisory</h3>
                        <p>
                            Strategic guidance for asset protection, planning, and structured financial oversight.
                        </p>
                    </div>
                    <div className="about-area">
                        <h3>Financial Consultancy</h3>
                        <p>
                            Advisory services for individuals and businesses seeking clarity in financial
                            structuring and compliance alignment.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Approach */}
            <SectionWrapper bg="grey">
                <div className="section-header">
                    <h2>Our Approach</h2>
                </div>
                <div className="about-content">
                    <p>Every engagement follows a defined structure:</p>
                    <ol className="about-steps">
                        <li><span className="about-steps__num">1</span> Case Assessment</li>
                        <li><span className="about-steps__num">2</span> Documentation Review</li>
                        <li><span className="about-steps__num">3</span> Process Mapping</li>
                        <li><span className="about-steps__num">4</span> Regulatory Coordination (where applicable)</li>
                        <li><span className="about-steps__num">5</span> Transparent Communication</li>
                    </ol>
                    <p className="about-note">
                        We do not promise outcomes beyond regulatory frameworks. We provide structured
                        guidance aligned with applicable processes.
                    </p>
                </div>
            </SectionWrapper>

            {/* Professional Commitment */}
            <SectionWrapper bg="white">
                <div className="about-content about-commitment">
                    <h2>Professional Commitment</h2>
                    <div className="gold-accent" style={{ margin: '12px auto 24px' }} />
                    <p>
                        We operate with discretion and accountability. Client engagements are handled with
                        confidentiality and ethical standards consistent with professional advisory practices.
                    </p>
                    <p>
                        Inclusive Solutions remains committed to delivering clarity, discipline, and structured
                        financial advisory services.
                    </p>
                    <Button to="/contact" variant="primary">Get in Touch</Button>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default About;
