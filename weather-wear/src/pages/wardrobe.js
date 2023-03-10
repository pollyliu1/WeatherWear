import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Wardrobe.module.css'
import dressPic from './images/dress.jpg'
import React from 'react'
import { useState, useEffect } from 'react'
import GetImage from '../components/StableDiffusion'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';
import storedData from './data'

const inter = Inter({ subsets: ['latin'] })
const src = `${storedData.image}`;



const ImageCard = async () => {
  const prompt = {"topic": `female_${storedData.style}_clothes`}
  // const response = await fetch('https://pollyliu.autocode.dev/weatherwear@dev/puppeteer/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(prompt),
    
  // })
  return fetch("https://pollyliu.autocode.dev/weatherwear@dev/puppeteer/", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(prompt),
  })
  .then(response=>response.json())
  .then(response=>{
    console.log(response);
    storedData.image = response;
  })

  
  
}


async function getData(e) {
  // const [data, setImage] = useState('');
   e.preventDefault();
  // useEffect(() => {
  //   ImageCard();
  // }, [data]);
// fetchData() is called whenever data is updated.
  let entered = document.querySelector('input[name=location]').value;
  let style = document.querySelector('input[name=style]').value;

  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${entered}&APPID=5d3ee5a55974f0c208937bb96c64d208`);
      if(!response.ok) {
          throw new Error('Network response was not OK');
      } else {
          const data = await response.json();
          storedData.temp = data['main'].temp;
          storedData.weather = data['weather'][0].description;
          storedData.style = style;
          storedData.icon = `http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png`;
          console.log(storedData.style);
          console.log(storedData.icon);
          console.log(storedData.temp);
          await ImageCard();
      }
  } catch (e) {
      console.log(e);
      throw new Error ("Sorry but that is not a valid location.");
  } 
}

export default function Wardrobe() {
  const [entered, setEntered] = useState('');
  
  return (
    <>
      <Head data-aos="fade-in">
        <title>Choose Your Wardrobe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      
      <div className={styles.body}>
        <div className="card-style">
      <Card>
        <div className={styles.sidebar}>
          <h1 className={styles.title}>Today's Outfit</h1>
          <h4 className={styles.intro}>Enter your information below:</h4>
          <form action='' method='GET' className={styles.form}>
            <div className={styles.question}>
              <label className={styles.label}>Gender: </label>
              <input type='text' className={styles.input} id='gender' name='gender' autoComplete='off'></input>
            </div>

            <div className={styles.question}>
              <label className={styles.label}>Location: </label>
              <input type='text' className={styles.input} id='location' name='location' autoComplete='off' onChange={(e) => setEntered(e.target.value)}></input>
            </div>
            
            <div className={styles.question}>
              <label className={styles.label}>Style: </label>
              <input type='text' className={styles.input} id='style' name='style' autoComplete='off'></input>
            </div>
            <div className='button-center'>
            <Button className={styles.btn} type="submit" onClick={getData}>Generate Outfit</Button>
            </div>
            
          </form>

          <p className={styles.weather}>Weather: {storedData.weather} </p>
          <p className={styles.weather}>Temperature: {Math.round((storedData.temp - 273.15)*100)/100} degrees Celsius</p>
          <img src={`${storedData.icon}`} height={200} width={200}/>
        </div>
        </Card>
        </div>
        
          <div className='outfit'>
            <img></img>
            <p className={styles.intro}>Outfit</p>
            <Image src={storedData.image} alt="outfit pic"
              loader={() => src}
              width={300}
              height={500}
              object-fit="fill"
              style={{borderRadius: 30 + 'px'}}>
            </Image>
          </div>
        
      </div>
    </>
  )
}