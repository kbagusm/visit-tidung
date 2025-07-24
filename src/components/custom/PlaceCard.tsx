import React from 'react'

function PlaceCard() {
  return (
    <a 
      href={`/places/${slug}`}
      className="block group h-full" // Tambahkan h-full di sini
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300 h-full"> {/* Dan di sini */}
        {/* ... konten card ... */}
      </div>
    </a>
  );
}



export default PlaceCard