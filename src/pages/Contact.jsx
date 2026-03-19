import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate Formspree submission success
        setFormStatus("success");
        e.target.reset();
    };

    return (
        <div className="contact-page animate-fade-in">
            <div className="page-header text-center bg-primary text-white section">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We're here to help you navigate corporate complexities.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-desc mb-4">Reach out to us for consultations, service enquiries, or career opportunities.</p>

                        <ul className="contact-details-list">
                            <li>
                                <div className="icon-wrapper">
                                    <MapPin size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h4>Office Address</h4>
                                    <p>123 Legal Avenue, Fairlands<br />Salem, Tamil Nadu, India - 636001</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper">
                                    <Phone size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper">
                                    <Mail size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:contact@tthulasiraman.com">contact@tthulasiraman.com</a></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper">
                                    <Clock size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h4>Working Hours</h4>
                                    <p>Mon - Sat: 9:30 AM - 6:30 PM<br />Sunday: Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3 className="form-title">Send us a Message</h3>
                        {formStatus === 'success' && (
                            <div className="form-success">
                                Thank you! Your message has been sent successfully. We will get back to you soon.
                            </div>
                        )}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id="name" name="name" required placeholder="John Doe" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+91 90000 00000" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Service of Interest</label>
                                <select id="service" name="service">
                                    <option value="">Select a service / general enquiry</option>
                                    <option value="corporate-law">Corporate Law</option>
                                    <option value="compliance">Compliance & Secretarial</option>
                                    <option value="taxation">Taxation & GST</option>
                                    <option value="ip">Intellectual Property</option>
                                    <option value="careers">Careers / Job Application</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" rows="5" required placeholder="How can we assist you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="map-container">
                <iframe
                    title="Google Maps Salem"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125028.94165561008!2d78.07727409247657!3d11.653775073038676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cc7524029f%3A0x6a1006fc4b8df2ac!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703163353495!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}
