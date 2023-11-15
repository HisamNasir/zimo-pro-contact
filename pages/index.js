
import Head from "next/head";
import PageOne from "./pageone/page";
import PageTwo from "./page_two/page";
import PageThree from "./page_three/page";
import { useEffect, useState } from 'react';
import PageFour from "./page_four/page";
import PageFive from "./page_five/page";
export default function Home() {

  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Boilerplate</title>
      </Head>

    <main className='h-screen w-full uppercase'>
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>
        <PageFive/>
    </main>
    </>
  )
}
