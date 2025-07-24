import { menus } from '@/data/menus';
import { useEffect, useState } from 'react';

function Navigation() {
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Fungsi untuk scroll ke section
  const scrollToSection = (id: string) => {
    if (currentPath === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ul className="flex-col hidden lg:flex-row lg:flex gap-2">
      {menus.map((menu) => (
        <li key={menu.title}>
          <a
            href={menu.href}
            onClick={(e) => {
              if (menu.scrollTarget) {
                e.preventDefault();
                scrollToSection(menu.scrollTarget);
              } else if (menu.title === 'Beranda' && currentPath === '/') {
                e.preventDefault();
                scrollToTop();
              }
            }}
            className={`navigation-menu-link hover:text-accent text-primary-foreground py-3 rounded-lg px-4 text-2xl font-[Karimun] transition-colors duration-300 block`}
          >
            {menu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;