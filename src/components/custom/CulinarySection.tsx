import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CulinaryCard from './CulinaryCard';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import type { CollectionEntry } from 'astro:content';
import TraditionalFoodCollapsible from './TraditionalFoodCollapsible';

type Props = {
  traditionalFoods: CollectionEntry<'traditionalFoods'>[];
};

function CulinarySection({ traditionalFoods }: Props) {

  return (
    <section
      id="culinary-section"
      className="py-10 px-4 bg-white transform transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Kuliner Khas</SectionHeading>

        <SectionSubHeading>
          Rasakan cita rasa otentik hidangan lokal Pulau Tidung
        </SectionSubHeading>

        <TraditionalFoodCollapsible traditionalFoods={traditionalFoods} />

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
