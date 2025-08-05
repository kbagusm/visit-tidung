import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CulinaryCard from './CulinaryCard';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

function CulinarySection() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
  if (swiperRef.current) {
    swiperRef.current.swiper.update();
  }
}, []);

  // Data kuliner dengan path gambar yang benar
  const culinaryItems = [
    {
      title: 'Bebek Goreng H. Slamet',
      description: 'Fresh catch grilled with local spices',
      image: '/images/culinary/Bebek Goreng H. Slamet (asli).jpg',
      rating: 4.7,
    },
    {
      title: 'Coconut Rice',
      description: 'Flagrant rice cooked in coconut milk',
      image: '/images/culinary/coconut-rice.jpg',
      rating: 4.5,
    },
    {
      title: 'Seafood Soup',
      description: 'Traditional soup with mixed seafood',
      image: '/images/culinary/seafood-soup.jpg',
      rating: 4.6,
    },
    {
      title: 'Tropical Fruits',
      description: 'Fresh local fruits and coconut water',
      image: '/images/culinary/tropical-fruits.jpg',
      rating: 4.3,
    },
    {
      title: 'Grilled Squid',
      description: 'Fresh squid grilled with special sauce',
      image: '/images/culinary/grilled-squid.jpg',
      rating: 4.8,
    },
    {
      title: 'Fish Satay',
      description: 'Local fish satay with peanut sauce',
      image: '/images/culinary/fish-satay.jpg',
      rating: 4.4,
    },
  ];

  return (
    <section
      id="culinary-section"
      className="py-10 px-4 bg-white transform transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Kuliner Khas</SectionHeading>

        <SectionSubHeading>
          Rasakan cita rasa otentik hidangan lokal Pulau Tidung
        </SectionSubHeading>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.culinary-next',
              prevEl: '.culinary-prev',
            }}
            pagination={{
              clickable: true,
              el: '.culinary-pagination',
              type: 'progressbar',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper pb-12"
          >
            {culinaryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <CulinaryCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  rating={item.rating}
                  // Hapus slug karena tidak digunakan
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="culinary-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="culinary-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Custom Progress Bar Pagination */}
          <div className="culinary-pagination max-w-3xl mx-auto mt-8 h-1 bg-gray-200 rounded-full overflow-hidden"></div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/culinary"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 hover:from-blue-600 hover:via-cyan-500 hover:to-green-500 text-white font-semibold rounded-lg transition-all duration-200 group shadow-lg"
          >
            Ketahui Kuliner Khas Tidung Lainnya!
          </a>
        </div>
      </div>
    </section>
  );
}

export default CulinarySection;
