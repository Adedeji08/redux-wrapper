import Image from 'next/image'
import { Inter } from 'next/font/google'
import Page from '../components/Page'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <main>
        <Page title="Index Page" linkTo="/other" />
    </main>
  )
}
