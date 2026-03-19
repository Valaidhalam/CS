import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, GraduationCap } from 'lucide-react';
import './Careers.css';

export default function Careers() {
    return (
        <div className="careers-page animate-fade-in">
            <div className="page-header text-center bg-primary text-white section">
                <div className="container">
                    <h1 className="page-title">Careers</h1>
                    <p className="page-subtitle">Join a team of dedicated professionals shaping corporate governance.</p>
                </div>
            </div>

            <div className="container section">
                <div className="careers-intro text-center">
                    <h2 className="section-title">Work With Us</h2>
                    <p className="section-desc max-w-700 mx-auto">
                        At T. Thulasi Raman Associates, we believe that our greatest asset is our people. We foster an environment of continuous learning, professional growth, and mutual respect. Whether you are an experienced professional or a fresh graduate, we offer challenging opportunities to build a rewarding career in corporate law and compliance.
                    </p>
                </div>

                <div className="culture-grid mt-5">
                    <div className="culture-card">
                        <Users size={40} className="culture-icon text-accent" />
                        <h3 className="culture-title">Collaborative Environment</h3>
                        <p className="culture-desc">Work alongside experienced professionals in a supportive, team-oriented culture.</p>
                    </div>
                    <div className="culture-card">
                        <GraduationCap size={40} className="culture-icon text-accent" />
                        <h3 className="culture-title">Continuous Learning</h3>
                        <p className="culture-desc">Constant exposure to new regulations, complex cases, and professional development programs.</p>
                    </div>
                    <div className="culture-card">
                        <Briefcase size={40} className="culture-icon text-accent" />
                        <h3 className="culture-title">Career Growth</h3>
                        <p className="culture-desc">Clear progression paths based on merit, dedication, and client success.</p>
                    </div>
                </div>
            </div>

            <div className="bg-alt section">
                <div className="container">
                    <div className="openings-section text-center">
                        <h2 className="section-title">Current Openings</h2>
                        <p className="section-desc mb-4">We are always looking for talented individuals to join our team.</p>

                        <div className="openings-list text-left">
                            <div className="opening-card">
                                <div className="opening-info">
                                    <h3 className="opening-title">Qualified Company Secretary</h3>
                                    <p className="opening-exp">Experience: 2-3 Years</p>
                                </div>
                                <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                            </div>
                            <div className="opening-card">
                                <div className="opening-info">
                                    <h3 className="opening-title">Management Trainee (CS Executive/Professional)</h3>
                                    <p className="opening-exp">Experience: Fresher</p>
                                </div>
                                <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                            </div>
                        </div>

                        <div className="general-application mt-5">
                            <h3 className="mb-2">Don't see a suitable role?</h3>
                            <p className="text-muted mb-3">Send us your resume, and we'll reach out when a relevant position opens up.</p>
                            <Link to="/contact" className="btn btn-outline">Submit Resume</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
