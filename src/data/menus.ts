export type Menu = {
  title: string;
  href: string;
}

export const menus: Menu[] = [
  {
    title: 'Beranda',
    href: '/',
  },
  {
    title: 'Tempat Wisata',
    href: '/#places',
    scrollTarget: 'places',
  },
  {
    title: 'Kuliner',
    href: '/culinary',
  },
  {
    title: 'Sejarah',
    href: '/history',
  },
  {
    title: 'Peta',
    href: '/map',
  },
  {
    title: 'Artikel',
    href: '/articles',
  },
  {
    title: 'Booklet',
    href: '/booklets',
  },
];