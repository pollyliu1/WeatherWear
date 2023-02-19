import React from 'react'
import { useState } from 'react'

function GetImage() {
  const [image, setImage] = useState('');

  const submitImage = async () => {
    const response = await fetch('https://pollyliu.autocode.dev/weatherwear@dev/stablediffusion/', {
      method: 'POST',
      body: JSON.stringify({ image }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    storedData.image = data;
  }

  return (
    <>
      <div>
        storedData.image
      </div>
    </>
  )
}

export default GetImage
