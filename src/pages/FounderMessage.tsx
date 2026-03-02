import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './FounderMessage.css';

const FounderMessage: React.FC = () => {
    useEffect(() => {
        document.title = "Founder's Message – Inclusive Solutions";
    }, []);

    return (
        <main>
            <PageHero title="Founder's Message" />

            <SectionWrapper bg="white">
                <div className="founder">
                    <div className="founder__quote-mark">"</div>
                    <blockquote className="founder__blockquote">
                        In financial and compliance matters, precision matters. Advisory services must be
                        guided by integrity, transparency, and a deep commitment to structured processes
                        that create lasting value.
                    </blockquote>

                    <div className="founder__body">
                        <p>
                            When we founded Inclusive Solutions, the vision was clear — to create an advisory
                            firm that prioritizes clarity, discipline, and regulatory understanding over
                            transactional speed.
                        </p>
                        <p>
                            In an industry where complexity often leads to confusion, we chose to build our
                            practice on the foundation of documentation discipline and transparent execution.
                            Every engagement we undertake follows a defined structure, every recommendation
                            we make is grounded in regulatory awareness.
                        </p>
                        <p>
                            Our commitment to professional accountability means that we do not promise
                            outcomes beyond applicable frameworks. Instead, we provide structured guidance
                            that empowers our clients to make informed decisions with confidence.
                        </p>
                        <p>
                            Through our IEPF Share Recovery service, we have extended our
                            philosophy of structured support to help individuals and families navigate
                            complex share recovery and transmission processes.
                        </p>
                        <p>
                            As we continue to grow, our core values remain unchanged: integrity, structure,
                            and transparency in every engagement.
                        </p>
                    </div>

                    <div className="founder__sign">
                        <div className="gold-accent" />
                        <p className="founder__name">Founder</p>
                        <p className="founder__title">Inclusive Solutions</p>
                    </div>

                    <div className="founder__cta">
                        <Button to="/contact" variant="primary">Get in Touch</Button>
                        <Button to="/about-us" variant="outline">About Our Firm</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default FounderMessage;
