import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Calculator, Lightbulb, ArrowRight } from 'lucide-react';
import './Services.css';

export default function Services() {
    const services = [
        {
            id: "corporate-law",
            icon: <Briefcase size={48} />,
            title: "Corporate Law",
            description: "Comprehensive advisory on corporate restructuring, mergers & acquisitions, and general corporate legal matters. We guide businesses through complex M&A transactions, joint ventures, and corporate governance issues.",
            features: ["Mergers & Acquisitions", "Joint Ventures & Collaborations", "Corporate Restructuring", "Legal Due Diligence"]
        },
        {
            id: "compliance",
            icon: <FileText size={48} />,
            title: "Compliance & Secretarial Services",
            description: "End-to-end secretarial audits, board processes, and regulatory filings to ensure total compliance. We act as your compliance partner, keeping you updated with changing regulations.",
            features: ["Company Incorporation", "Secretarial Audits", "FEMA Compliance", "Annual Filings & XBRL"]
        },
        {
            id: "taxation",
            icon: <Calculator size={48} />,
            title: "Taxation & GST",
            description: "Strategic tax planning, GST registration, returns filing, and representation before authorities. Navigate the complex tax regime in India with our expert advisory and compliance support.",
            features: ["GST Registration & Filing", "Direct Tax Advisory", "Tax Assessments & Appeals", "Transfer Pricing"]
        },
        {
            id: "ip",
            icon: <Lightbulb size={48} />,
            title: "Intellectual Property",
            description: "Protection of your brand assets through trademark, patent, and copyright registrations. We help you secure your intellectual property rights both domestically and internationally.",
            features: ["Trademark Registration", "Copyright Filing", "Patent Advisory", "IP Prosecution & Litigation"]
        }
    ];

    return (
        <div className="services-page animate-fade-in">
            <div className="page-header text-center bg-primary text-white section">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">Comprehensive corporate legal and compliance solutions.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-list">
                    {services.map((svc, index) => (
                        <div key={svc.id} id={svc.id} className={`service-detail-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="service-detail-content">
                                <div className="service-detail-icon">{svc.icon}</div>
                                <h2 className="section-title">{svc.title}</h2>
                                <p className="section-desc">{svc.description}</p>
                                <ul className="service-features">
                                    {svc.features.map((feature, i) => (
                                        <li key={i}><ArrowRight size={16} className="text-accent" /> {feature}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn-primary mt-4">Enquire Now</Link>
                            </div>
                            <div className="service-detail-image">
                                <div className="image-placeholder"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
