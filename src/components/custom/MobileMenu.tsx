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

    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled]);

  return (
    <Sheet>
      <SheetTrigger
        asChild
        className={isScrolled ? 'text-primary' : 'text-primary-foreground'}
      >
        <AlignJustify className="block lg:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="top" onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-4 p-4">
          <div className="text-5xl font-[Karimun]">Menu</div>
          {menus.map((menu) => (
            <a
              key={menu.title}
              href={menu.href}
              className="font-[Karimun] text-2xl"
            >
              {menu.title}
            </a>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Tutup
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
