export type Menu = {
  title: string;
  href: string;
  scrollTarget?: string; // Tambahkan tanda tanya untuk optional property
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
    href: '/#culinary-section',
    scrollTarget: 'culinary-section'
  },
  {
    title: 'Sejarah',
    href: '/#history',
    scrollTarget: 'history'
  },
  {
    title: 'Peta', 
    href: '/#maps', 
    scrollTarget: 'maps' 
  },
  {
    title: 'Artikel', 
    href: '/#articles', 
    scrollTarget: 'articles' 
  },
  {
    title: 'Booklet',
    href: '/booklets',
  },
];