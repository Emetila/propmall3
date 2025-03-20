import { Open_Sans, Montserrat } from 'next/font/google';

// Apply fonts in the app
export const openSans = Open_Sans({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
});

export const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
});
