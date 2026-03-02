import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import './LegalPage.css';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        document.title = 'Privacy Policy – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero title="Privacy Policy" />

            <SectionWrapper bg="white">
                <div className="legal-content">
                    <p className="legal-intro">
                        Inclusive Solutions respects your privacy and is committed to protecting personal
                        information shared through this website.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>We may collect:</p>
                    <ul>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Contact number</li>
                        <li>Information voluntarily submitted via contact forms</li>
                    </ul>
                    <p>We do not collect financial account details through this website.</p>

                    <h2>Use of Information</h2>
                    <p>Information submitted may be used to:</p>
                    <ul>
                        <li>Respond to inquiries</li>
                        <li>Schedule consultations</li>
                        <li>Provide requested information</li>
                        <li>Improve website functionality</li>
                    </ul>
                    <p>We do not sell or share personal data with unrelated third parties.</p>

                    <h2>Data Security</h2>
                    <p>
                        We implement reasonable administrative and technical safeguards to protect
                        information from unauthorized access or misuse.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        This website may use cookies to enhance user experience and monitor site performance.
                    </p>

                    <h2>Third-Party Links</h2>
                    <p>
                        Our website may contain links to external websites. We are not responsible for
                        their privacy practices.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        For privacy-related queries, please contact us at{' '}
                        <a href="mailto:info@inclusive-solutions.in">info@inclusive-solutions.in</a>.
                    </p>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default PrivacyPolicy;
