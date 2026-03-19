import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
    const phoneNumber = "919876543210";
    const message = "Hello, I'd like to enquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
            <MessageCircle size={32} />
        </a>
    );
}
