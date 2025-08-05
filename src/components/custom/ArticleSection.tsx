// src/components/custom/ArticleSection.tsx
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

function ArticleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Artikel tetap untuk homepage
  const articles = [
    {
      title: "Pesona Pulau Tidung: Surga Tersembunyi di Kepulauan Seribu",
      excerpt: "Temukan keindahan alam, kuliner khas, dan aktivitas seru di Pulau Tidung",
      author: "Tim Explore Tidung",
      date: "15 Des 2024",
      readTime: "5 min read",
      image: "/images/articles/article1.1.jpeg",
      slug: "pesona-pulau-tidung"
    },
    {
      title: "Panduan Lengkap Island Hopping",
      excerpt: "Rencanakan petualangan island hopping sempurna di kepulauan Seribu.",
      author: "Penulis Petualangan",
      date: "10 Des 2024",
      readTime: "8 min baca",
      image: "/images/articles/island-hopping.jpg",
      slug: "panduan-island-hopping"
    },
    {
      title: "Budaya dan Tradisi Lokal",
      excerpt: "Pelajari warisan budaya kaya dan gaya hidup tradisional penduduk Pulau Tidung.",
      author: "Ahli Budaya",
      date: "5 Des 2024",
      readTime: "6 min baca",
      image: "/images/articles/culture.jpg",
      slug: "budaya-dan-tradisi"
    },
    {
      title: "Pariwisata Berkelanjutan di Tidung",
      excerpt: "Bagaimana Pulau Tidung memimpin dalam praktik pariwisata berkelanjutan.",
      author: "Pecinta Lingkungan",
      date: "28 Nov 2024",
      readTime: "7 min baca",
      image: "/images/articles/sustainable-tourism.jpg",
      slug: "pariwisata-berkelanjutan"
    },
    {
      title: "5 Homestay Terbaik di Pulau Tidung",
      excerpt: "Temukan tempat menginap terbaik untuk pengalaman pulau yang autentik.",
      author: "Ahli Akomodasi",
      date: "20 Nov 2024",
      readTime: "4 min baca",
      image: "/images/articles/homestays.jpg",
      slug: "homestay-terbaik"
    },
    {
      title: "Petualangan Kuliner: Hidangan Laut Pulau Tidung",
      excerpt: "Panduan pecinta makanan untuk hidangan laut terfres di pulau.",
      author: "Blogger Kuliner",
      date: "15 Nov 2024",
      readTime: "6 min baca",
      image: "/images/articles/seafood.jpg",
      slug: "petualangan-kuliner"
    },
  ];

  return (
    <section 
      id="articles"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 transform translate-y-10 transition-all duration-500"
    >
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-500">
          <SectionHeading>
            Artikel Terkait
          </SectionHeading>
          <SectionSubHeading>
            Jelajahi artikel menarik tentang Pulau Tidung
          </SectionSubHeading>
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.articles-next',
              prevEl: '.articles-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper pb-12"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <a 
                        href={`/articles/${article.slug}`} 
                        className="text-blue-50 font-medium px-4 py-2 rounded-full transition-colors duration-200 shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:shadow-md"
                      >
                        Baca Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="articles-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="articles-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Tombol untuk menuju halaman artikel lengkap */}
        <div className="text-center mt-16">
          <a 
            href="/articles" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg transition-all duration-300"
          >
            Lihat Semua Artikel
          </a>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;