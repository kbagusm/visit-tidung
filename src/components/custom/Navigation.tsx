import { menus } from '@/data/menus';

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

  return (
    <ul className="flex items-center gap-0.5">
      {menus.map((menu) => (
        <li key={menu.title} className="flex">
          {menu.scrollTarget ? (
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
        </li>
      ))}
    </ul>
  );
}

export default Navigation;