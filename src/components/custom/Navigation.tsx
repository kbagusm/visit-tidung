import { menus } from '@/data/menus';
import { useEffect } from 'react';

function Navigation() {
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash && window.location.pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    }
  }, []);

  return (
    <ul className="flex-col hidden lg:flex-row lg:flex gap-2">
      {menus.map((menu) => (
        <li key={menu.title} className="flex">
          {menu.scrollTarget ? (
            <button
              type="button"
              onClick={() => scrollToSection(menu.scrollTarget!)}
              className="navigation-menu-link hover:text-accent text-primary-foreground py-3 rounded-lg px-4 text-2xl font-[Karimun] transition-colors duration-300 w-full text-left"
            >
              {menu.title}
            </button>
          ) : (
            <a
              href={menu.href}
              className="navigation-menu-link hover:text-accent text-primary-foreground py-3 rounded-lg px-4 text-2xl font-[Karimun] transition-colors duration-300 w-full block"
            >
              {menu.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
