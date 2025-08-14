import { useRef, useEffect, useState } from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import { booklets } from '@/data/booklets';

function BookletSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  
  // State untuk menentukan jumlah slide yang ditampilkan berdasarkan lebar layar
  const [slidesPerView, setSlidesPerView] = useState(3);
  // State untuk menentukan tinggi preview PDF
  const [previewHeight, setPreviewHeight] = useState('380px');
  
  // Mengatur jumlah slide per view dan tinggi preview berdasarkan lebar layar
  useEffect(() => {
    const updateSlidesSettings = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
        setPreviewHeight('550px');
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
        setPreviewHeight('550px');
      } else {
        setSlidesPerView(3); // ✅ jadi 4 booklet per slide
        setPreviewHeight('500px'); // ✅ tinggi preview PDF dinaikkan
      }
    };

    updateSlidesSettings();
    window.addEventListener('resize', updateSlidesSettings);

    return () => {
      window.removeEventListener('resize', updateSlidesSettings);
    };
  }, []);

  // Animation observer
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

  const featuredBooklets = booklets.slice(0, 5);

  return (
    <section 
      id="booklets"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 transform translate-y-10 transition-all duration-500"
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

        <div className="relative pb-6 mx-4 lg:mx-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: '.booklets-next',
              prevEl: '.booklets-prev',
              disabledClass: 'swiper-button-disabled',
            }}
            watchSlidesProgress={true}
            watchOverflow={true}
            onSlideChange={(swiper) => {
              // Disable prev button di awal
              if (swiper.isBeginning) {
                document
                  .querySelector('.booklets-prev')
                  ?.classList.add('pointer-events-none', 'opacity-50');
              } else {
                document
                  .querySelector('.booklets-prev')
                  ?.classList.remove('pointer-events-none', 'opacity-50');
              }

              // Disable next button di akhir
              if (swiper.isEnd) {
                document
                  .querySelector('.booklets-next')
                  ?.classList.add('pointer-events-none', 'opacity-50');
              } else {
                document
                  .querySelector('.booklets-next')
                  ?.classList.remove('pointer-events-none', 'opacity-50');
              }
            }}
            onInit={(swiper) => {
              // Cek kondisi awal
              if (swiper.isBeginning) {
                document
                  .querySelector('.booklets-prev')
                  ?.classList.add('pointer-events-none', 'opacity-50');
              }
              if (swiper.isEnd) {
                document
                  .querySelector('.booklets-next')
                  ?.classList.add('pointer-events-none', 'opacity-50');
              }
            }}
            pagination={{
              clickable: true,
              el: '.booklets-pagination',
              type: 'bullets',
            }}
            className="mySwiper pb-12"
          >
            {featuredBooklets.map((booklet, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white my-4 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-6 text-center">
                    <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
                      <FileText className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{booklet.title}</h3>
                    <p className="text-gray-600 mb-4">{booklet.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Penulis:</span>
                        <span className="font-medium">{booklet.author}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Halaman:</span>
                        <span className="font-medium">{booklet.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-medium">{booklet.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ukuran:</span>
                        <span className="font-medium">{booklet.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pratinjau PDF dengan tinggi yang diatur secara responsif */}
                  <div 
                    className="overflow-hidden border-t border-gray-200 relative flex-grow"
                    style={{ height: previewHeight }}
                  >
                    <iframe 
                      src={`${booklet.url}#view=fitH`} 
                      className="w-full h-full hidden xl:block"
                      frameBorder="0"
                      loading="lazy"
                    >
                      <p>Browser Anda tidak mendukung pratinjau PDF. Silakan <a href={booklet.url}>download file</a> untuk melihat.</p>
                    </iframe>

                    <div className='block xl:hidden w-full h-full'>

                    <img
                      src={booklet.poster}
                      alt={`Cover ${booklet.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                      <div className="w-full flex justify-center items-center">
                        <h3 className="text-5xl font-[karimun] text-center text-white z-10">
                          {booklet.title}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                    </div>

                  </div>
                  
                  <div className="p-4 bg-gray-50 flex gap-2">
                    <a 
                      href={booklet.url} 
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="booklets-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="booklets-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100 transition-colors flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination untuk mobile */}
          <div className="booklets-pagination flex justify-center mt-6 space-x-2 md:hidden" />
        </div>
        
        {/* Tombol untuk menuju halaman booklet lengkap */}
        <div className="text-center mt-16">
          <a 
            href="/booklets" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Lihat Semua Booklet
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookletSection;