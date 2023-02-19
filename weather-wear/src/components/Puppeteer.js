import React from 'react'
import { useState } from 'react'

function LocationPage() {
  const [location, setLocation] = useState('');

  const fetchLocation = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5d3ee5a55974f0c208937bb96c64d208');
    const data = await response.json();
    setLocation(data);
  }

  const submitLocation = async () => {
    const response = await fetch('https://pollyliu.autocode.dev/weatherwear@dev/stablediffusion/', {
      method: 'POST',
      body: JSON.stringify({ location }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    setTimeout(() => {
        return data;
    }, 1000);
  }

  return (
    <>
      <div>
        <input
          type='text'
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button onClick={submitLocation}>Submit Location</button>
      </div>
      <hr />
      <button onClick={fetchLocation}>Get Locations</button>

        <div key={location.id}>
            {location.id}. {location.text}
        </div>
    </>
  )
}

export default LocationPage
