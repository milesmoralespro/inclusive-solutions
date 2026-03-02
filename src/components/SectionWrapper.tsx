import React from 'react';
import './SectionWrapper.css';

interface SectionWrapperProps {
    children: React.ReactNode;
    bg?: 'white' | 'grey' | 'navy';
    id?: string;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    bg = 'white',
    id,
    className = '',
}) => {
    return (
        <section id={id} className={`section section--${bg} ${className}`.trim()}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
