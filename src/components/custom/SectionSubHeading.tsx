import React from 'react';

function SectionSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-foreground text-center mb-16">{children}</p>
  );
}

export default SectionSubHeading;
