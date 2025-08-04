import React from 'react';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-6xl font-[Karimun] text-primary text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
