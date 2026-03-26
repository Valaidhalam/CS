import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import './About.css';

export default function About() {
    return (
        <div className="about-page animate-fade-in">
            <div className="page-header text-center bg-primary text-white">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">Driven by integrity, expertise, and a commitment to excellence.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">Our Story</h2>
                        <p className="section-desc mb-4">
                            Founded in Salem, Tamil Nadu, <strong>T. Thulasi Raman Associates</strong> has grown from a specialized secretarial practice into a comprehensive corporate advisory firm. With over a decade of deep involvement in India's regulatory frameworks, we have successfully guided hundreds of businesses toward sustainable compliance and robust corporate governance.
                        </p>
                        <p className="section-desc">
                            Our firm is built on the belief that compliance is not a burden, but a strategic advantage. We work closely with our clients, acting not just as consultants, but as integrated partners in their business growth journey.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="office-placeholder"></div>
                    </div>
                </div>
            </div>

            <div className="bg-alt section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mv-card">
                            <Target size={40} className="mv-icon text-primary" />
                            <h3 className="service-title">Our Mission</h3>
                            <p className="service-desc">To deliver uncompromising quality in corporate legal and compliance services, enabling businesses to operate with absolute confidence and legal certainty.</p>
                        </div>
                        <div className="mv-card">
                            <Eye size={40} className="mv-icon text-primary" />
                            <h3 className="service-title">Our Vision</h3>
                            <p className="service-desc">To be the most trusted and sought-after Company Secretary firm in India, known for our innovative solutions, ethical practices, and client-centric approach.</p>
                        </div>
                        <div className="mv-card">
                            <Award size={40} className="mv-icon text-primary" />
                            <h3 className="service-title">Core Values</h3>
                            <p className="service-desc">Integrity in all dealings, excellence in execution, continuous learning, and an unwavering commitment to our clients' success.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="profile-section text-center">

                    {/* ❌ removed outside heading */}

                    <div className="profile-card mt-4">
                        <div className="profile-photo-wrapper">
                            <div className="profile-placeholder"></div>
                        </div>

                        <div className="profile-info text-left">

                            {/* ✅ added inside */}
                            <p className="profile-title">Principal Profile</p>

                            <h3 className="profile-name">CS T. Thulasi Raman</h3>

                            <p className="profile-role text-accent">
                                Founder &amp; Principal Company Secretary
                            </p>

                            <div className="profile-bio section-desc">
                                <p>
                                    CS T. Thulasi Raman is a Fellow Member of the Institute of Company Secretaries of India (ICSI) with over 15 years of rich experience in Corporate Laws, FEMA, and Securities Laws.
                                </p>
                                <p className="mt-2">
                                    He specializes in corporate restructuring, mergers and amalgamations, and acts as a strategic advisor to boards of various listed and unlisted companies.
                                </p>

                                <ul className="profile-credentials mt-3">
                                    <li><strong>Qualifications:</strong> B.Com, FCS, LL.B</li>
                                    <li><strong>Memberships:</strong> Fellow Member, ICSI</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}