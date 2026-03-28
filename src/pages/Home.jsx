import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Calculator, Lightbulb, CheckCircle, Star, ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content glass-panel animate-fade-in">
                        <h1 className="hero-title">Governance. <br /><span className="text-accent">Compliance.</span> <br />Confidence.</h1>
                        <p className="hero-subtitle">
                            Premium Company Secretary &amp; Legal Advisory Services empowering businesses across India.
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation</Link>
                            <Link to="/services" className="btn btn-outline btn-lg">Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-surface">
                <div className="container intro-container">
                    <div className="intro-text">
                        <h2 className="section-title">Established Excellence in <br />Corporate Governance</h2>
                        <div className="title-underline"></div>
                        <p className="section-desc">
                            T. Thulasi Raman Associates is a premier practicing Company Secretary firm dedicated to providing comprehensive corporate legal, compliance, and secretarial services. We partner with businesses—from startups to established enterprises—to navigate complex regulatory landscapes with confidence.
                        </p>
                        <Link to="/about" className="link-arrow mt-4">
                            Learn About Our Firm <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="intro-stats">
                        <div className="stat-card">
                            <h3 className="stat-number">15+</h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">500+</h3>
                            <p className="stat-label">Clients Served</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Compliance Focus</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">24/7</h3>
                            <p className="stat-label">Client Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-alt">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Expertise</h2>
                        <div className="title-underline mx-auto"></div>
                        <p className="section-desc max-w-700 mx-auto">Specialized legal and compliance solutions tailored to your business needs, delivered with uncompromising quality.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card animate-delay-1">
                            <div className="service-icon-wrapper"><Briefcase size={32} /></div>
                            <h3 className="service-title">Corporate Law</h3>
                            <p className="service-desc">Expert advisory on corporate restructuring, M&amp;A, and complex corporate legal frameworks.</p>
                            <Link to="/services#corporate-law" className="service-link">Read More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card animate-delay-2">
                            <div className="service-icon-wrapper"><FileText size={32} /></div>
                            <h3 className="service-title">Compliance</h3>
                            <p className="service-desc">End-to-end secretarial audits, board processes, and regulatory filings to ensure total compliance.</p>
                            <Link to="/services#compliance" className="service-link">Read More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card animate-delay-3">
                            <div className="service-icon-wrapper"><Calculator size={32} /></div>
                            <h3 className="service-title">Taxation &amp; GST</h3>
                            <p className="service-desc">Strategic tax planning, GST registration, returns filing, and authoritative representation.</p>
                            <Link to="/services#taxation" className="service-link">Read More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card animate-delay-1">
                            <div className="service-icon-wrapper"><Lightbulb size={32} /></div>
                            <h3 className="service-title">Intellectual Property</h3>
                            <p className="service-desc">Fierce protection of your brand assets through trademark, patent, and copyright registrations.</p>
                            <Link to="/services#ip" className="service-link">Read More <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-choose-section p-0">
                <div className="why-choose-grid">
                    <div className="why-choose-image"></div>
                    <div className="why-choose-content-wrapper">
                        <div className="why-choose-content">
                            <h2 className="section-title">Why Choose Us?</h2>
                            <div className="title-underline"></div>
                            <p className="section-desc">
                                We don't just ensure compliance; we build a foundation of trust that enables your business to grow securely.
                            </p>
                            <ul className="benefits-list">
                                <li>
                                    <div className="benefit-icon"><CheckCircle size={20} /></div>
                                    <div>
                                        <strong className="text-primary">Client-First Approach</strong>
                                        <p>Tailored solutions that align with your business goals.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-icon"><CheckCircle size={20} /></div>
                                    <div>
                                        <strong className="text-primary">Deep Expertise</strong>
                                        <p>Highly qualified professionals with extensive industry knowledge.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="benefit-icon"><CheckCircle size={20} /></div>
                                    <div>
                                        <strong className="text-primary">Timely Execution</strong>
                                        <p>Strict adherence to deadlines and proactive compliance management.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-surface testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Client Trust</h2>
                        <div className="title-underline mx-auto"></div>
                        <p className="section-desc max-w-700 mx-auto">Voices from the businesses we've empowered with steadfast compliance.</p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="quote-mark">"</div>
                            <p className="testimonial-text">Affordable and efficient ROC filing service. The team is very responsive and keeps track of deadlines. Highly recommended for startups and small businesses.</p>
                            <div className="testimonial-footer">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="star-icon" size={14} fill="currentColor" />)}
                                </div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Arun Praskan Thanigasalam</h4>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="quote-mark">"</div>
                            <p className="testimonial-text">Mr.Tulasiraman has helped me in the settlement of my IEPF claim which is a long pending issue. His constant support and follow up in this regard is very much appreciable and praiseworthy.</p>
                            <div className="testimonial-footer">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="star-icon" size={14} fill="currentColor" />)}
                                </div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Seethalakshmi Vishwanathan</h4>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="quote-mark">"</div>
                            <p className="testimonial-text">On the first day, the first lesson from thulasi raman sir was "padikadhinga, thedunga" These words inspired me. Had a great and knowledgeable experience. Gained knowledge more than my academy portions.</p>
                            <div className="testimonial-footer">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="star-icon" size={14} fill="currentColor" />)}
                                </div>
                                <div className="testimonial-author">
                                    <h4 className="author-name">Shakthi Muthuvalli</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Industries We Serve */}
<section className="section bg-surface industries-section">
  <div className="container">

    <div className="section-header text-center">
      <h2 className="section-title">Industries We Serve</h2>
      <div className="title-underline mx-auto"></div>
      <p className="section-desc max-w-700 mx-auto">
        Supporting businesses across diverse industries with expert legal and compliance services.
      </p>
    </div>

    <div className="industries-grid">

      <div className="industry-card">🏥 Healthcare & Pharma</div>
      <div className="industry-card">🏨 Hospitality & Resorts</div>
      <div className="industry-card">🌾 Agro & Food Industries</div>

      <div className="industry-card">🏢 Real Estate & Construction</div>
      <div className="industry-card">⚡ Renewable Energy</div>
      <div className="industry-card">🏭 Manufacturing Units</div>

      <div className="industry-card">🛍 FMCG & Retail</div>
      <div className="industry-card">🎓 Education & Institutions</div>
      <div className="industry-card">💻 IT & Software</div>

      <div className="industry-card">🚚 Logistics & Supply Chain</div>
      <div className="industry-card">💰 Financial Services</div>
      <div className="industry-card">🤝 NGOs & CSR</div>

    </div>

  </div>
</section>
        </div>
    );
}
