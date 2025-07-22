// import { useEffect, useState } from 'react';
import { menus } from '@/data/menus';

function Navigation() {
  // const [currentPath, setCurrentPath] = useState<string>('');

  // useEffect(() => {
  //   setCurrentPath(window.location.pathname);
  // }, []);

  return (
    <ul className="flex-col hidden lg:flex-row lg:flex gap-2">
      {menus.map((menu) => (
        <li>
          <a
            href={menu.href}
            className={`navigation-menu-link hover:text-accent text-primary-foreground py-3 rounded-lg px-4 text-2xl font-[Karimun] transition-colors duration-300`}
          >
            {menu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
