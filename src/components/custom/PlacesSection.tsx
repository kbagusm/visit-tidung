import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import { ArrowRight, MapPin, Mountain, Users } from 'lucide-react';

function PlacesSection() {
  return (
    <section
      id="places"
      className="py-4 px-4 bg-gradient-to-r from-slate-50 to-blue-50 opacity-0 transform transition-all duration-500"
    >
      <div className="py-12 max-w-6xl mx-auto">
        {/* <!-- Section Header --> */}
        <SectionHeading>Tempat yang Wajib Dikunjungi</SectionHeading>
        <SectionSubHeading>
          Jelajahi keindahan alam yang memukau
        </SectionSubHeading>

        {/* <!-- Places Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Tidung Bridge */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/jembatan-cinta.jpg"
                alt="Jembatan Cinta"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-sky-500 text-white rounded-full text-xs font-medium">
                  Iconic
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Mountain className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Jembatan Cinta
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                The famous connecting bridge between Tidung Besar and Tidung
                Kecil, perfect for cliff jumping and sunset views.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Best visited at sunset
              </div>
            </div>
          </div>

          {/* <!-- Card 2: Pulau Payung --> */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/pulau-payung.jpeg"
                alt="Pulau Payung"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                  Romantic
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Pulau Payung
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                A pristine beach with traditional gazebos offering spectacular
                sunset views and calm waters for swimming.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                West coast of Tidung Besar
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/cat1.jpg"
                alt="Coral Garden"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                  lorem
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Coral Garden
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Underwater paradise with vibrant coral reefs and diverse marine
                life, perfect for snorkeling and diving.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Guided tours available
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/cat2.jpg"
                alt="Pantai Tanjung Tinggi"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                  Beach
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Pantai Tanjung Tinggi
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Famous for its crystal clear waters and white sandy beaches, a
                perfect spot for swimming and relaxation.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                North coast of Tidung Kecil
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/Febri Cuwitno.jpeg"
                alt="Pulau Harapan"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
                  Island
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Pulau Harapan
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                A small neighboring island with untouched beauty, great for day
                trips and nature photography.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                30 minutes boat ride from Tidung
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 relative overflow-hidden">
              <img
                src="src/assets/images/places/dapet perkoro.jpg"
                alt="Mangrove Forest"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-medium">
                  Eco-Tourism
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Mangrove Forest
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Explore the lush mangrove ecosystem with wooden pathways,
                perfect for nature lovers and bird watching.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Southeast coast of Tidung Besar
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/places"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 hover:from-blue-600 hover:via-cyan-500 hover:to-green-500 text-white font-semibold rounded-lg transition-all duration-200 group shadow-lg"
          >
            Kunjungi Wisata Ikonik Lainnya!
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PlacesSection;
