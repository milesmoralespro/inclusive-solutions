import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import './LegalPage.css';

const Disclaimer: React.FC = () => {
    useEffect(() => {
        document.title = 'Disclaimer – Inclusive Solutions';
    }, []);

    return (
        <main>
            <PageHero title="Disclaimer" />

            <SectionWrapper bg="white">
                <div className="legal-content">
                    <p className="legal-intro">
                        The information provided on this website is for general informational purposes only
                        and does not constitute legal, financial, or investment advice.
                    </p>

                    <p>
                        Inclusive Solutions and its divisions provide structured advisory support and
                        compliance assistance. Final outcomes in regulatory or procedural matters are
                        subject to applicable laws, authority review, and documentation accuracy.
                    </p>

                    <p>We do not guarantee specific outcomes or timelines.</p>

                    <p>
                        Engagement with our services is subject to formal consultation and written agreement.
                    </p>

                    <p>
                        Users are advised to seek independent professional advice where appropriate.
                    </p>
                </div>
            </SectionWrapper>
        </main>
    );
};

export default Disclaimer;
