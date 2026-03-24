import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, GraduationCap, Mail, Phone, FileText } from 'lucide-react';
import './Careers.css';

export default function Careers() {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            position: formData.get('position'),
            resumeLink: formData.get('resumeLink')
        };
        try {
            const response = await fetch('http://localhost:5000/api/careers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };
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

                        <div className="application-form mt-5">
                            <h3 className="mb-3">Submit Your Application</h3>
                            <p className="text-muted mb-4">Fill out the form below to apply. We'll review your resume and get back to you.</p>
                            
                            <form onSubmit={handleSubmit} className="career-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" required placeholder="Your full name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" name="email" required placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input type="tel" id="phone" name="phone" required placeholder="+91 90000 00000" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="position">Position Applied For</label>
                                        <select id="position" name="position">
                                            <option value="">Select a position</option>
                                            <option value="Qualified Company Secretary">Qualified Company Secretary</option>
                                            <option value="Management Trainee">Management Trainee</option>
                                            <option value="General Application">General Application</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="resumeLink">Resume Link (Google Drive/LinkedIn) *</label>
                                    <input type="url" id="resumeLink" name="resumeLink" required placeholder="https://drive.google.com/..." />
                                    <small className="text-muted">Share your resume via Google Drive, Dropbox, or LinkedIn</small>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit Application</button>
                                
                                {formStatus === 'success' && (
                                    <div className="form-success mt-3">
                                        Thank you! Your application has been submitted successfully. We will contact you soon.
                                    </div>
                                )}
                                {formStatus === 'error' && (
                                    <div className="form-error mt-3">
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
