import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Calculator, Lightbulb, ArrowRight, Shield, Award, Scale, Users, ClipboardCheck, Search, Building2, FileCheck, Stamp, Mic, Scale3d, TrendingUp, BadgeCheck } from 'lucide-react';
import './Services.css';
import corporateImg from '../assets/services/corporate.png';
import governanceImg from '../assets/services/compliance.png';
import registrationsImg from '../assets/services/registrations2.png';
import legalImg from '../assets/services/legal.png';
import startupImg from '../assets/services/startup.png';
import auditImg from '../assets/services/audit.png';
import iprImg from '../assets/services/ipr2.png';

export default function Services() {
    const services = [
        {
            id: "corporate-secretarial",
            icon: <Briefcase size={48} />,
            title: "Corporate & Secretarial Services",
            description: "Comprehensive corporate and secretarial solutions for businesses of all sizes. We ensure your company maintains full regulatory compliance while focusing on growth.",
            features: ["Company, LLP & Entity Incorporation", "Secretarial Compliance & ROC Filings", "Drafting of Resolutions, Minutes & Agreements", "Maintenance of Statutory Registers"],
            image: corporateImg
        },
        {
            id: "governance-compliance",
            icon: <Shield size={48} />,
            title: "Corporate Governance & Regulatory Compliance",
            description: "Expert guidance on corporate governance practices and regulatory compliance across multiple statutory frameworks. We help build transparent, accountable systems.",
            features: ["Corporate Governance Advisory", "RBI & NBFC Compliances", "IEPF Related Services","Secretarial Audit & Compliance Certification"],
            image: governanceImg
        },
        {
            id: "registrations-licenses",
            icon: <Award size={48} />,
            title: "Registrations & Licenses",
            description: "End-to-end assistance for obtaining various registrations and licenses required for business operations. We streamline the approval process to ensure rapid compliance.",
            features: ["NBFC Registration", "FSSAI Registration", "Factory License", "ISO Certification", "DGFT Registration", "GST Registration"],
            image: registrationsImg
        },
        {
            id: "legal-advisory",
            icon: <Scale size={48} />,
            title: "Legal & Advisory",
            description: "Professional legal consultation and drafting services designed to protect your core business interests. Get proactive legal strategies and robust contract vetting.",
            features: ["Legal Consultation", "Drafting & Vetting of Agreements", "Due Diligence (Secretarial & Legal)", "Arbitration & Mediation Services"],
            image: legalImg
        },
        {
            id: "startup-advisory",
            icon: <Lightbulb size={48} />,
            title: "Startup & Business Advisory",
            description: "Complete support for startups and emerging businesses, tracking from initial formation to scaled operations. We establish strong foundations for sustainable growth.",
            features: ["Startup Structuring & Advisory", "End-to-End Compliance Support", "Business Setup Assistance"],
            image: startupImg
        },
        {
            id: "audit-services",
            icon: <ClipboardCheck size={48} />,
            title: "Audit Services",
            description: "Independent audit, internal review, and certification services developed to ensure uncompromising financial transparency, accuracy, and overall stakeholder confidence.",
            features: ["Internal Audit", "Certification Services", "Valuation Services"],
            image: auditImg
        },
        {
            id: "ipr",
            icon: <Search size={48} />,
            title: "Intellectual Property Rights (IPR)",
            description: "Strategic protection and dedicated registration of your critical intellectual property assets. We safeguard your brand identity, trademarks, and creative innovations.",
            features: ["Trademark Registration", "Copyright & IPR Advisory", "Protection & Enforcement Support"],
            image: iprImg
        }
    ];

    return (
        <div className="services-page animate-fade-in">
            <div className="page-header text-center bg-primary text-white">
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
                                <div className="image-placeholder">
                                    <img src={svc.image} alt={svc.title} className="service-img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
