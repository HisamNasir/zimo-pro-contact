import '@/styles/globals.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 20,
    });
  }, []);

  return <Component {...pageProps} />;
}
