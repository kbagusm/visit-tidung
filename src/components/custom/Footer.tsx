import {
  Heart,
} from 'lucide-react';
import Logo from '@/assets/images/mendayung-seribu-logo.svg'
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={Logo.src} alt="Logo Mendayung Seribu" className='w-8' />
              <h3 className="text-2xl font-[Karimun]">
                Visit Tidung
              </h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {currentYear} © KKN PPM UGM - Mendayung Seribu
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-[Karimun]">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/places"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tempat Wisata
                </a>
              </li>
              <li>
                <a
                  href="/culinary"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Kuliner
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sejarah
                </a>
              </li>
              <li>
                <a
                  href="/maps"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Peta
                </a>
              </li>
              <li>
                <a
                  href="/articles"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Artikel
                </a>
              </li>
              <li>
                <a
                  href="/booklets"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Booklet
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-2xl font-[Karimun]">
              Destinasi Populer
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/places/jembatan-cinta"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Jembatan Cinta
                </a>
              </li>
              <li>
                <a
                  href="/places/pulau-payung"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pulau Payung
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pantai Saung Cemara
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Spot Snorkeling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sunset Point
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Visit Tidung. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for Pulau Tidung</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
