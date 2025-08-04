import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

  const articles = [
    {
      title: "Best Snorkeling Spots in Tidung Island",
      excerpt: "Discover the most beautiful underwater locations with vibrant coral reefs and tropical fish.",
      author: "Travel Guide Team",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/images/articles/snorkeling.jpg",
      slug: "best-snorkeling-spots" // Slug ditambahkan
    },
    {
      title: "A Complete Guide to Island Hopping",
      excerpt: "Plan your perfect island hopping adventure around the Thousand Islands archipelago.",
      author: "Adventure Writer",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      image: "/images/articles/island-hopping.jpg",
      slug: "island-hopping-guide" // Slug ditambahkan
    },
    {
      title: "Local Culture and Traditions",
      excerpt: "Learn about the rich cultural heritage and traditional lifestyle of Tidung Island residents.",
      author: "Cultural Expert",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "/images/articles/culture.jpg",
      slug: "local-culture-traditions" // Slug ditambahkan
    },
    {
      title: "Sustainable Tourism in Tidung",
      excerpt: "How Tidung Island is leading the way in sustainable tourism practices.",
      author: "Eco Traveler",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      image: "/images/articles/sustainable-tourism.jpg",
      slug: "sustainable-tourism" // Slug ditambahkan
    },
    {
      title: "Top 5 Homestays in Tidung Island",
      excerpt: "Find the best places to stay for an authentic island experience.",
      author: "Accommodation Expert",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      image: "/images/articles/homestays.jpg",
      slug: "top-homestays" // Slug ditambahkan
    },
    {
      title: "Culinary Journey: Tidung's Seafood Delights",
      excerpt: "A food lover's guide to the freshest seafood on the island.",
      author: "Food Blogger",
      date: "Nov 15, 2024",
      readTime: "6 min read",
      image: "/images/articles/seafood.jpg",
      slug: "seafood-delights" // Slug ditambahkan
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Travel Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories and helpful guides about Tidung Island
          </p>
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
                        Read More
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
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;