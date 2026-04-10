import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Calculator, Lightbulb, CheckCircle, Star, ArrowRight, Shield, Award, Scale, ClipboardCheck, Search } from 'lucide-react';
import './Home.css';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    const homeServices = [
        { id: "corporate", icon: <Briefcase size={32} />, title: "Corporate & Secretarial", description: "Comprehensive corporate and secretarial solutions for your business ensuring full regulatory compliance.", link: "/services#corporate-secretarial" },
        { id: "governance", icon: <Shield size={32} />, title: "Corporate Governance", description: "Expert guidance on governance practices across multiple statutory frameworks. We build transparent systems.", link: "/services#governance-compliance" },
        { id: "registrations", icon: <Award size={32} />, title: "Registrations & Licenses", description: "End-to-end assistance for obtaining critical registrations and licenses. We streamline the approval process.", link: "/services#registrations-licenses" },
        { id: "legal", icon: <Scale size={32} />, title: "Legal & Advisory", description: "Professional legal consultation designed to protect your core business interests with proactive solutions.", link: "/services#legal-advisory" },
        { id: "startup", icon: <Lightbulb size={32} />, title: "Startup Advisory", description: "Complete support for startups tracking from formation to scaled operations. Establishing strong basics.", link: "/services#startup-advisory" },
        { id: "audit", icon: <ClipboardCheck size={32} />, title: "Audit Services", description: "Independent audit and certification services developed to ensure uncompromising financial transparency.", link: "/services#audit-services" },
        { id: "ipr", icon: <Search size={32} />, title: "Intellectual Property", description: "Strategic protection and dedicated registration of your critical intellectual property assets.", link: "/services#ipr" }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) setItemsPerView(1);
            else if (window.innerWidth < 992) setItemsPerView(2);
            else setItemsPerView(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxSlide = Math.max(0, homeServices.length - itemsPerView);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
        }, 3500);
        return () => clearInterval(timer);
    }, [maxSlide]);

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

                    <div className="home-carousel-container">
                        <div className="home-carousel-track" style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}>
                            {homeServices.map((svc) => (
                                <div className="home-carousel-slide" key={svc.id}>
                                    <div className="service-card" style={{ height: '100%' }}>
                                        <div className="service-icon-wrapper">{svc.icon}</div>
                                        <h3 className="service-title">{svc.title}</h3>
                                        <p className="service-desc">{svc.description}</p>
                                        <Link to={svc.link} className="service-link" style={{ marginTop: 'auto' }}>Read More <ArrowRight size={16} /></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-dots">
                            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
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
