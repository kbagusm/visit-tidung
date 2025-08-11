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

  // Data artikel sesuai dengan konten Anda
  const articles = [
    {
      title: "Pesona Pulau Tidung: Surga Tersembunyi di Kepulauan Seribu",
      excerpt: "Temukan keindahan alam, kuliner khas, dan aktivitas seru di Pulau Tidung",
      author: "Tim Explore Tidung",
      date: "2024-06-15",
      readTime: "5 min baca",
      image: "/images/articles/article1.jpeg",
      slug: "pesona-pulau-tidung" // Slug sesuai nama file
    },
    {
      title: "Spot Snorkeling Terbaik di Pulau Tidung",
      excerpt: "Temukan lokasi bawah air terindah dengan terumbu karang berwarna-warni",
      author: "Tim Petualang Laut",
      date: "2024-06-10",
      readTime: "6 min baca",
      image: "/images/articles/snorkeling.jpg",
      slug: "spot-snorkeling-terbaik"
    },
    {
      title: "Jembatan Cinta: Ikon Romantis Pulau Tidung",
      excerpt: "Jelajahi kisah di balik jembatan penghubung Pulau Tidung Besar dan Kecil",
      author: "Tim Sejarah Bahari",
      date: "2024-06-05",
      readTime: "4 min baca",
      image: "/images/articles/jembatan-cinta.jpg",
      slug: "jembatan-cinta"
    },
    {
      title: "Kuliner Khas Pulau Tidung: Dari Puk Cue hingga Keripik Sukun",
      excerpt: "Nikmati cita rasa autentik hidangan laut khas Pulau Tidung",
      author: "Tim Kuliner Nusantara",
      date: "2024-05-28",
      readTime: "7 min baca",
      image: "/images/articles/kuliner-tidung.jpg",
      slug: "kuliner-khas-tidung"
    },
    {
      title: "Panduan Wisata Keluarga di Pulau Tidung",
      excerpt: "Aktivitas seru untuk keluarga dengan anak-anak di Pulau Tidung",
      author: "Tim Wisata Keluarga",
      date: "2024-05-20",
      readTime: "8 min baca",
      image: "/images/articles/wisata-keluarga.jpg",
      slug: "wisata-keluarga"
    },
    {
      title: "Konservasi Penyu dan Terumbu Karang di Pulau Tidung",
      excerpt: "Dukung upaya pelestarian lingkungan di Pulau Tidung Kecil",
      author: "Tim Konservasi Laut",
      date: "2024-05-15",
      readTime: "6 min baca",
      image: "/images/articles/konservasi-tidung.jpg",
      slug: "konservasi-penyu"
    }
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
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
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