import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';

import { AlignJustify } from 'lucide-react';
import { useEffect, useState } from 'react';

import { menus } from '@/data/menus';

export default function MobileMenu() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      // Tutup menu mobile setelah memilih
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    }
  };

  return (
    <Sheet>
      <SheetTrigger
        asChild
        className={isScrolled ? 'text-primary' : 'text-primary-foreground'}
      >
        <AlignJustify className="block lg:hidden cursor-pointer" size={32} />
      </SheetTrigger>
      <SheetContent side="top" className="pt-20">
        <div className="flex flex-col gap-6 p-4">
          <div className="text-5xl font-[Karimun] mb-4">Menu</div>
          {menus.map((menu) => (
            menu.scrollTarget ? (
              <a
                key={menu.title}
                href={`#${menu.scrollTarget}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(menu.scrollTarget!);
                }}
                className="font-[Karimun] text-3xl py-2 hover:text-blue-600 transition-colors"
              >
                {menu.title}
              </a>
            ) : (
              <a
                key={menu.title}
                href={menu.href}
                className="font-[Karimun] text-3xl py-2 hover:text-blue-600 transition-colors"
              >
                {menu.title}
              </a>
            )
          ))}
        </div>
        <SheetFooter className="mt-8">
          <SheetClose asChild>
            <Button variant="outline" className="w-full text-lg py-6">
              Tutup Menu
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}