import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, GraduationCap, Mail, Phone, FileText } from 'lucide-react';
import './Careers.css';

export default function Careers() {
    const [formStatus, setFormStatus] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
        // Lock body scroll on mobile
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    };

    const closeForm = () => {
        setShowForm(false);
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
    };

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
        
        if (!data.resumeLink) {
            setFormStatus('error');
            return;
        }
        
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
            <div className="page-header text-center bg-primary text-white">
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
                                <button className="btn btn-primary" onClick={openForm}>
                                    Apply Now
                                </button>
                            </div>

                            <div className="opening-card">
                                <div className="opening-info">
                                    <h3 className="opening-title">Management Trainee (CS Executive/Professional)</h3>
                                    <p className="opening-exp">Experience: Fresher</p>
                                </div>
                                <button className="btn btn-primary" onClick={openForm}>
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {showForm && (
                            <div className="modal-overlay" onClick={(e) => {
                                // close if clicking the dark backdrop
                                if (e.target === e.currentTarget) closeForm();
                            }}>
                                <div className="modal-content">

                                    <button className="close-btn" onClick={closeForm}>✕</button>

                                    <div className="application-form">

                                        <h3 className="form-title">Join Our Team</h3>
                                        <p className="form-subtitle">
                                            Send us your application and we'll get back to you
                                        </p>

                                        {formStatus === 'success' && (
                                            <div className="form-success">
                                                ✅ Application submitted successfully! We'll be in touch soon.
                                            </div>
                                        )}

                                        {formStatus === 'error' && (
                                            <div className="form-error">
                                                ❌ Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="career-form">

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Full Name *</label>
                                                    <input type="text" name="name" required placeholder="John Doe" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Email *</label>
                                                    <input type="email" name="email" required placeholder="john@example.com" />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Phone *</label>
                                                    <input type="tel" name="phone" required placeholder="+91 98765 43210" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Position</label>
                                                    <select name="position">
                                                        <option>Select a position</option>
                                                        <option>Qualified Company Secretary</option>
                                                        <option>Management Trainee</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Resume Link (Google Drive, Dropbox) *</label>
                                                <input type="url" name="resumeLink" required placeholder="https://drive.google.com/..." />
                                            </div>

                                            <button type="submit" className="btn submit-btn">
                                                Submit Application
                                            </button>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}