import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import './Home.css';

const Home: React.FC = () => {
    return (
        <main>
            {/* ── SECTION 1: HERO ── */}
            <section className="hero">
                <div className="container hero__inner">
                    <h1 className="hero__title">
                        Inclusive Solutions
                    </h1>
                    <h3 className="hero__subtitle">
                        Professional Financial &amp; Compliance Advisory Services
                    </h3>
                    <p className="hero__subtitle">
                        Structured solutions across asset recovery, audit &amp; assurance, wealth advisory,
                        and financial consultancy — delivered with integrity and regulatory clarity.
                    </p>
                    <div className="hero__cta">
                        <Button to="/services" variant="primary">Explore Our Services</Button>
                        <Button to="/iepf-share-recovery" variant="outline">
                            IEPF Share Recovery
                        </Button>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: INTRODUCTION SNAPSHOT ── */}
            <SectionWrapper bg="white" id="intro">
                <div className="intro">
                    <div className="section-header">
                        <h2>A Structured Advisory Approach</h2>
                    </div>
                    <div className="intro__body">
                        <p>
                            Inclusive Solutions, operating under Inclusive Trading, is a professional advisory
                            firm providing structured financial, compliance, and asset recovery services.
                        </p>
                        <p>
                            We focus on clarity, documentation integrity, and transparent execution across
                            diverse advisory requirements. Our approach is guided by regulatory understanding,
                            procedural discipline, and client-first ethics.
                        </p>
                    </div>
                    <div className="intro__stats">
                        <div className="intro__stat">
                            <span className="intro__stat-number">10+</span>
                            <span className="intro__stat-label">Years Experience</span>
                        </div>
                        <div className="intro__stat">
                            <span className="intro__stat-number">5</span>
                            <span className="intro__stat-label">Advisory Verticals</span>
                        </div>
                        <div className="intro__stat">
                            <span className="intro__stat-number">100%</span>
                            <span className="intro__stat-label">Compliance Focused</span>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── SECTION 3: CORE SERVICES ── */}
            <SectionWrapper bg="grey" id="services">
                <div className="section-header">
                    <h2>Our Core Services</h2>
                    <p>Specialized advisory across five key verticals, each driven by discipline and transparency.</p>
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
                </div>
            </SectionWrapper>

            {/* ── SECTION 4: WHY US ── */}
            <SectionWrapper bg="white" id="why-us">
                <div className="why-us">
                    <div className="section-header">
                        <h2>Integrity. Structure. Transparency.</h2>
                    </div>
                    <div className="why-us__content">
                        <ul className="why-us__list">
                            <li><span className="why-us__check">✔</span> Regulatory Awareness</li>
                            <li><span className="why-us__check">✔</span> Documentation Discipline</li>
                            <li><span className="why-us__check">✔</span> Professional Discretion</li>
                            <li><span className="why-us__check">✔</span> Client-Centric Advisory</li>
                            <li><span className="why-us__check">✔</span> Structured Process Execution</li>
                        </ul>
                        <div className="why-us__text">
                            <p>
                                We operate with professional accountability and clarity. Our focus remains on
                                delivering structured advisory support rather than transactional solutions.
                            </p>
                            <p>
                                Each engagement is approached with diligence and transparent communication,
                                ensuring regulatory alignment at every step.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── SECTION 5: FEATURED SERVICE ── */}
            <SectionWrapper bg="grey" id="featured-service">
                <div className="section-header">
                    <h2>Featured Service</h2>
                    <p>
                        Our advisory services are delivered through focused verticals to ensure
                        subject-matter specialization and efficient execution.
                    </p>
                </div>
                <div className="division-card">
                    <div className="division-card__content">
                        <span className="division-card__badge">Specialized Service</span>
                        <h3 className="division-card__title">IEPF Share Recovery</h3>
                        <p className="division-card__desc">
                            Share Recovery, Transmission &amp; Compliance Support. Our dedicated service
                            for structured asset recovery and regulatory coordination.
                        </p>
                        <Button to="/iepf-share-recovery" variant="primary">Learn More</Button>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── SECTION 6: FOUNDER PREVIEW ── */}
            <SectionWrapper bg="white" id="founder">
                <div className="founder-preview">
                    <div className="founder-preview__quote">
                        <span className="founder-preview__mark">"</span>
                        <blockquote>
                            In financial and compliance matters, precision matters. Our advisory services
                            are built on the belief that clarity, integrity, and structured processes
                            create lasting value for every client we serve.
                        </blockquote>
                    </div>
                    <p className="founder-preview__attr">— Founder, Inclusive Solutions</p>
                    <Button to="/founder-message" variant="outline" className="founder-preview__link">
                        Read Full Message
                    </Button>
                </div>
            </SectionWrapper>

            {/* ── SECTION 7: FINAL CTA ── */}
            <section className="final-cta">
                <div className="container final-cta__inner">
                    <h2>Partner with a Structured Advisory Firm</h2>
                    <p>
                        Connect with us to understand how we can support your financial
                        and compliance requirements.
                    </p>
                    <Button to="/contact" variant="primary">Contact Us</Button>
                </div>
            </section>
        </main>
    );
};

export default Home;
