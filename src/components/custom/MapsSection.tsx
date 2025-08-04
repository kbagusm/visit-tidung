import React, { useRef, useEffect } from 'react';
import { MapPin, Clock, Calendar, Map } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

function MapsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animasikan section
          if (entry.target === sectionRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
          // Animasikan container teks
          if (entry.target === containerRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
          // Animasikan card kiri
          if (entry.target === leftCardRef.current) {
            entry.target.classList.remove('opacity-0', '-translate-x-10');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
          // Animasikan card kanan
          if (entry.target === rightCardRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-x-10');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (containerRef.current) observer.observe(containerRef.current);
    if (leftCardRef.current) observer.observe(leftCardRef.current);
    if (rightCardRef.current) observer.observe(rightCardRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (leftCardRef.current) observer.unobserve(leftCardRef.current);
      if (rightCardRef.current) observer.unobserve(rightCardRef.current);
    };
  }, []);

  return (
    <section 
      id="maps" 
      ref={sectionRef}
      className="py-20 bg-white transform translate-y-10 transition-all duration-500"
    >
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-500">
          <SectionHeading>Peta dan Lokasi Pulau Tidung</SectionHeading>
          <SectionSubHeading>
            Temukan cara terbaik untuk menjelajahi keindahan Pulau Tidung dengan peta interaktif dan informasi lokasi penting
          </SectionSubHeading>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftCardRef}
            className="opacity-0 transform -translate-x-10 transition-all duration-500"
          >
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Getting There</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800">From Jakarta</h4>
                    <p className="text-gray-600">
                      Take a boat from Marina Ancol (2 hours) or Muara Angke (1.5 hours)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Travel Time</h4>
                    <p className="text-gray-600">1.5 - 2 hours by speedboat from Jakarta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-cyan-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Best Time to Visit</h4>
                    <p className="text-gray-600">April to October (dry season)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={rightCardRef}
            className="opacity-0 transform translate-x-10 transition-all duration-500 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-8 text-center"
          >
            <Map className="h-24 w-24 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Interactive Map</h3>
            <p className="text-gray-600 mb-6">
              Explore detailed maps of Tidung Island with marked attractions, restaurants, and accommodations
            </p>
            <a 
              href="/maps" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              View Full Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapsSection;