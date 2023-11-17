import React from "react";
import Head from "next/head";
import PageOne from "./pageone/page";
import PageTwo from "./page_two/page";
import PageThree from "./page_three/page";
import { useEffect } from "react";
import PageFour from "./page_four/page";
import PageFive from "./page_five/page";
import PageSix from "./page_six/page";
import PageSeven from "./page_seven/page";
import PageEight from "./page_eight/page";
import Aos from "aos";
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full uppercase">
        <div  className="page" data-aos="fade" data-aos-once="false">
          <PageOne />
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageTwo />
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageThree />
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageFour/>
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageFive/>
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageSix/>
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageSeven/>
        </div>
        <div  className="page"  data-aos="fade" data-aos-once="false" data-aos-delay="200">
          <PageEight/>
        </div>
      </main>
    </>
  );
};

export default Home;
