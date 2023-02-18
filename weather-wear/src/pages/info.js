import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  return (
    <>
      <Head>
        <title>About WeatherWear</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <div className="about-description">
      <h2>
          get started with WeatherWear
        </h2>
        <h4>
          an AI powered web app to assist you in dressing for the weather.
        </h4>  
      </div>
      
    </>
  )
}
