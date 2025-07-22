import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { AlignJustify } from 'lucide-react';
import { useEffect, useState } from 'react';

const menus: { title: string; href: string }[] = [
  {
    title: 'Beranda',
    href: '/',
  },
  {
    title: 'Tentang',
    href: '/about',
  },
  {
    title: 'Wisata',
    href: '/places',
  },
  {
    title: 'Kuliner',
    href: '/culinary',
  },
];

export default function Navigation() {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex gap-4 items-center">
      {/* Desktop Navigation */}
      <NavigationMenu className="gap-4">
        <NavigationMenuList className="flex-col hidden sm:flex-row sm:flex gap-2">
          {menus.map((menu) => (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuLink
                href={menu.href}
                // Add the currentPath variable to activate the current menu item
                className={`hover:text-secondary-foreground py-3 rounded-lg px-4 text-2xl font-[Karimun] ${
                  currentPath === menu.href
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-primary'
                    : 'text-primary-foreground'
                }`}
              >
                {menu.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Sheet */}
      <Sheet>
        <SheetTrigger asChild className={isScrolled ? 'text-primary' : 'text-primary-foreground'}>
          <AlignJustify className="block sm:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="top" onOpenAutoFocus={(e) => e.preventDefault()}>
          {/* <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader> */}
          <div className="flex flex-col gap-4 p-4">
            <div className='text-5xl font-[Karimun]'>Menu</div>
            {menus.map((menu) => (
              <a key={menu.title} href={menu.href} className='font-[Karimun] text-2xl'>
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
    </div>
  );
}
