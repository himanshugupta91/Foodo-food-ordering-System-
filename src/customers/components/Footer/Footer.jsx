import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container-custom px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Brand & Copyright */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-display font-bold text-primary-500">Foodo</h2>
                    <span className="text-neutral-300">|</span>
                    <p className="text-neutral-500 text-sm">
                        © 2025 Foodo. All rights reserved.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a href="/" className="text-neutral-400 hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="/" className="text-neutral-400 hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="/" className="text-neutral-400 hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="/" className="text-neutral-400 hover:text-primary-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
