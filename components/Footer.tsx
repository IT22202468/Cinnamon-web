import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold">True Cinnamon</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Bringing the finest Ceylon Cinnamon from our plantations directly to your table.
                        Experience the true aroma and health benefits of authentic cinnamon.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm text-white/80">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 shrink-0 text-secondary-light" />
                            <span>123 Cinnamon Gardens,<br />Colombo 07, Sri Lanka</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 shrink-0 text-secondary-light" />
                            <span>+94 11 234 5678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 shrink-0 text-secondary-light" />
                            <span>info@truecinnamon.lk</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">
                © {new Date().getFullYear()} True Cinnamon. All rights reserved.
            </div>
        </footer>
    );
}
