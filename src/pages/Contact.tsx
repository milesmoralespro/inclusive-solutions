import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import OfficeMap from '../components/OfficeMap';
import './Contact.css';

// ============================================================
// EmailJS Credentials — Replace these with your actual values
// from https://dashboard.emailjs.com/
// ============================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // e.g. 'aBcDeFgHiJkLmN'

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendError, setSendError] = useState('');
    const [errors, setErrors] = useState<Partial<FormData>>({});

    useEffect(() => {
        document.title = 'Contact Us – Inclusive Solutions';
    }, []);

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setSendError('');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone || 'Not provided',
                    subject: form.subject || 'General Inquiry',
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSendError('Failed to send message. Please try again or email us directly at info@inclusive-solutions.in');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <main>
            <PageHero title="Contact Us" subtitle="Connect with our advisory team." />

            <SectionWrapper bg="white">
                <div className="contact-grid">
                    {/* Form */}
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="contact-success">
                                <span className="contact-success__icon">✓</span>
                                <h3>Thank You</h3>
                                <p>Your message has been received. Our team will connect with you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="contact-form__group">
                                    <label htmlFor="contact-name">Full Name <span>*</span></label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <span className="contact-form__error">{errors.name}</span>}
                                </div>

                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-email">Email Address <span>*</span></label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                        />
                                        {errors.email && <span className="contact-form__error">{errors.email}</span>}
                                    </div>
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-phone">Phone Number</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__group">
                                    <label htmlFor="contact-subject">Subject</label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="iepf-recovery">IEPF Share Recovery</option>
                                        <option value="audit">Audit & Assurance</option>
                                        <option value="wealth">Wealth Advisory</option>
                                        <option value="financial">Financial Consultancy</option>
                                        <option value="compliance">Compliance & Legal</option>
                                    </select>
                                </div>

                                <div className="contact-form__group">
                                    <label htmlFor="contact-message">Message <span>*</span></label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows={5}
                                    />
                                    {errors.message && <span className="contact-form__error">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn--primary contact-form__submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending…' : 'Send Message'}
                                </button>
                                {sendError && (
                                    <p className="contact-form__send-error">{sendError}</p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Info */}
                    <div className="contact-info">
                        <div className="contact-info__card">
                            <h3>Our Offices</h3>
                        </div>
                        <div className="contact-info__card">
                            <h4>Delhi – Surajmal Vihar</h4>
                            <p>D-90 Surajmal Vihar, Near Yamuna Sports Complex Gate No.1, Delhi-110092</p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=28.6285,77.3028" target="_blank" rel="noopener noreferrer" className="contact-info__directions">📍 Get Directions</a>
                        </div>
                        <div className="contact-info__card">
                            <h4>Delhi – Kashmere Gate</h4>
                            <p>1246, Chhota Bazar, Kashmere Gate, Delhi-110006</p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=28.6672,77.2273" target="_blank" rel="noopener noreferrer" className="contact-info__directions">📍 Get Directions</a>
                        </div>
                        <div className="contact-info__card">
                            <h4>Noida</h4>
                            <p>BS-104, Sec 70, Noida, U.P. - 201301</p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=28.5744,77.3701" target="_blank" rel="noopener noreferrer" className="contact-info__directions">📍 Get Directions</a>
                        </div>
                        <div className="contact-info__card">
                            <h4>New Delhi – Panchsheel Enclave</h4>
                            <p>B-19, Basement, Panchsheel Enclave, New Delhi - 110017</p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=28.5535,77.2196" target="_blank" rel="noopener noreferrer" className="contact-info__directions">📍 Get Directions</a>
                        </div>
                        <div className="contact-info__card">
                            <h3>Email</h3>
                            <p>info@inclusive-solutions.in</p>
                        </div>
                        <div className="contact-info__card">
                            <h3>Business Hours</h3>
                            <p>Monday – Friday<br />10:00 AM – 6:00 PM IST</p>
                        </div>
                        <div className="contact-info__note">
                            <p>
                                All inquiries are handled with confidentiality. We aim to respond
                                within 1–2 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="grey">
                <OfficeMap />
            </SectionWrapper>
        </main>
    );
};

export default Contact;
