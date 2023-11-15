import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageOne from './page_one/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <PageOne/>
    </main>
  )
}
