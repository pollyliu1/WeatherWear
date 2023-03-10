import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  return (
    <>
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.15
        }
      },}}> 
      <Head>
        <title>About WeatherWear</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <div className={styles.aboutdescription}>
        <h1 className={styles.header}>Dress for the Weather</h1>
        <h4 className={styles.paragraph}>
          Have trouble deciding what to wear in the morning? <br/>
          Feeling stressed about keeping up with fashion trends while being comfortable? <br/>
          
          Here are some tips:<br/><br/>

          1. Layering is key. Enjoy varying temperatures throughout the day by adding or removing layers of clothing
          to stay comfortable.<br/><br/>

          2. Watch for wind. Wind chill can dramatically change how warm you feel, especially during colder seasons.<br/><br/>

          3. Explore humidity. Higher amounts of water vapour in the air can make you feel warmer, while lower amounts
          can make you feel cooler.<br/><br/>

          4. Bring a jacket. Although you might want to dress for the season, temperatures can vary day to day, and it 
          is often a good idea to bring a jacket. 
        </h4>  
    </div>
    </motion.div>
    </>
  )
}
