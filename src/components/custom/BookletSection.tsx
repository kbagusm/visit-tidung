import React, { useRef, useEffect, useState } from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

function BookletSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bookletRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
          if (entry.target === containerRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
          if (bookletRefs.current.includes(entry.target as HTMLDivElement)) {
            entry.target.classList.remove('opacity-0', 'scale-90');
            entry.target.classList.add('opacity-100', 'scale-100');
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (containerRef.current) observer.observe(containerRef.current);
    
    bookletRefs.current.forEach(booklet => {
      if (booklet) observer.observe(booklet);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
      
      bookletRefs.current.forEach(booklet => {
        if (booklet) observer.unobserve(booklet);
      });
    };
  }, []);

  const booklets = [
    {
      title: "Complete Travel Guide",
      description: "Everything you need to know about visiting Tidung Island",
      pages: "24 pages",
      format: "PDF",
      size: "5.2 MB",
      url: "/booklets/kurikulum.pdf",
      previewUrl: "/booklets/kurikulum.pdf"
    },
    {
      title: "Accommodation Directory",
      description: "List of hotels, guesthouses, and homestays on the island",
      pages: "16 pages",
      format: "PDF",
      size: "3.1 MB",
      url: "/booklets/accommodation.pdf",
      previewUrl: "/booklets/accommodation.pdf"
    },
    {
      title: "Activity Planner",
      description: "Plan your daily activities and water sports adventures",
      pages: "12 pages",
      format: "PDF",
      size: "2.8 MB",
      url: "/booklets/activity-planner.pdf",
      previewUrl: "/booklets/activity-planner.pdf"
    },
    {
      title: "Local Food Guide",
      description: "Discover the best restaurants and local culinary experiences",
      pages: "20 pages",
      format: "PDF",
      size: "4.5 MB",
      url: "/booklets/food-guide.pdf",
      previewUrl: "/booklets/food-guide.pdf"
    },
  ];

  return (
    <section 
      id="booklets"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transform translate-y-10 transition-all duration-500"
    >
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-500">
          <SectionHeading>
            Booklet
          </SectionHeading>
          <SectionSubHeading>
            Baca dan unduh booklet lengkap untuk petualangan Pulau Tidung Anda
          </SectionSubHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {booklets.map((booklet, index) => (
            <div 
              key={index}
              ref={el => { bookletRefs.current[index] = el; }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 opacity-0 transform scale-90"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{booklet.title}</h3>
                <p className="text-gray-600 mb-4">{booklet.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Pages:</span>
                    <span>{booklet.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>{booklet.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{booklet.size}</span>
                  </div>
                </div>
              </div>
              
              {/* Pratinjau PDF */}
              <div className="h-48 overflow-hidden border-t border-gray-200 relative">
                <iframe 
                  src={`${booklet.previewUrl}#view=fitH`} 
                  className="w-full h-full"
                  frameBorder="0"
                >
                  <p>Browser Anda tidak mendukung pratinjau PDF. Silakan <a href={booklet.url}>download file</a> untuk melihat.</p>
                </iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
              
              <div className="p-4 bg-gray-50 flex gap-2">
                <a 
                  href={booklet.previewUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Baca
                </a>
                <a 
                  href={booklet.url} 
                  download
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tombol untuk menuju halaman booklet lengkap */}
        <div className="text-center mt-16">
          <a 
            href="/booklets" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300"
          >
            View All Booklets
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookletSection;