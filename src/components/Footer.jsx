import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Gavel } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container footer-container">

                {/* Logo */}
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        <Gavel className="footer-icon" size={32} />
                        <div className="footer-logo-text">
                            <span className="footer-title">T. Thulasi Raman</span>
                            <span className="footer-subtitle">Associates</span>
                        </div>
                    </Link>

                    <p className="footer-desc">
                        Governance. Compliance. Confidence. Providing premium Company Secretary and Legal Advisory services across India.
                    </p>

                    <div className="social-links">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Practice Areas */}
                <div className="footer-col">
                    <h4 className="footer-heading">Practice Areas</h4>
                    <ul className="footer-links">
                        <li><Link to="/services#corporate-law">Corporate Law</Link></li>
                        <li><Link to="/services#compliance">Compliance & Secretarial</Link></li>
                        <li><Link to="/services#taxation">Taxation & GST</Link></li>
                        <li><Link to="/services#ip">Intellectual Property</Link></li>
                    </ul>
                </div>

                {/* ✅ Legal (MOVED BEFORE CONTACT) */}
                <div className="footer-col">
                    <h4 className="footer-heading">Legal</h4>
                    <ul className="footer-links">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/cookies">Cookies</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>123 Legal Avenue, Salem, Tamil Nadu, India - 636001</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <a href="tel:+919876543210">+91 98765 43210</a>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <a href="mailto:contact@tthulasiraman.com">
                                contact@tthulasiraman.com
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <div className="container">

                    <p>© {currentYear} T. Thulasi Raman Associates. All rights reserved.</p>

                    <p className="dev-credit">
                        Developed by{" "}
                        <a
                            href="https://www.valaidhalam.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Valaidhalam technologies
                        </a>
                    </p>

                </div>
            </div>

        </footer>
    );
}