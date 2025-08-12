import { useState, useRef, useEffect } from 'react';
import { menus } from '@/data/menus';

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  // Menutup dropdown saat klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ul className="flex items-center gap-0.5">
      {menus.map((menu) => (
        <li 
          key={menu.title} 
          className="relative"
          onMouseEnter={() => menu.dropdownItems && setOpenDropdown(menu.title)}
          onMouseLeave={() => menu.dropdownItems && setOpenDropdown(null)}
        >
          {menu.scrollTarget ? (
            <a
              href={`${menu.href}`}
              onClick={(e) => {
                // e.preventDefault();
                // scrollToSection(menu.scrollTarget!);
                setOpenDropdown(null);
              }}
              className="navigation-menu-link py-3 px-4 text-2xl font-[Karimun] transition-colors duration-300 hover:text-accent focus:outline-none whitespace-nowrap"
            >
              {menu.title}
            </a>
          ) : menu.dropdownItems ? (
            // Menu dengan dropdown dan fungsi scroll
            <a
              href={`#${menu.scrollTarget}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(menu.scrollTarget!);
              }}
              className="navigation-menu-link py-3 px-4 text-2xl font-[Karimun] transition-colors duration-300 hover:text-accent focus:outline-none whitespace-nowrap"
            >
              {menu.title}
            </a>
          ) : (
            <a
              href={menu.href}
              className="navigation-menu-link py-3 px-4 text-2xl font-[Karimun] transition-colors duration-300 hover:text-accent focus:outline-none whitespace-nowrap"
            >
              {menu.title}
            </a>
          )}

          {/* Dropdown untuk Tempat Wisata */}
          {menu.dropdownItems && openDropdown === menu.title && (
            <div 
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200"
            >
              <div className="py-2">
                {menu.dropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-6 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navigation;