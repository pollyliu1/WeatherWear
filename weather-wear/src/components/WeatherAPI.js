import { useState, useEffect } from 'react'

function getWeather(props) {

    const location = {"location": "Toronto"} // this is hard coded

    return fetch("https://angelaxu.autocode.dev/weatherwear@dev/weather/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(location),
    })
    .then(response => response.json())
    .then(response => {
        // console.log(response.data); 
        return response.data
    })
    .catch(err => console.log(err))
}

// Fetching Open Weather API
function FetchWeather(props) {
    const [weather, setWeather] = useState()

    useEffect(() => {
        getWeather(props).then(response => setWeather(response));
      }, []);

    // getWeather().then(response => console.log(response))

    return (
        <div>
            <div>{JSON.stringify(weather, null, 2)}</div>
            {/* {console.log('weather:' + weather)} */}
        </div>
    )
}

export default FetchWeather