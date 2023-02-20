# WeatherWear

## Inspiration 
Everyone understands the struggle of finding the perfect outfit for different weather conditions. We wanted to create an application that would simplify the process and help everyone stay comfortable and stylish, no matter what the forecast. By using WeatherWear, users can get AI-generated outfit recommendations that are tailored to their location, style, and the current weather conditions.

## What it does
WeatherWear is a web application that generates recommended outfits using AI based on the current weather in your location. Users input their location and clothing style and are provided with outfit recommendations tailored to the current temperature and precipitation. 

## How we built it
We used the Autocode platform to build our application. Autocode helped us quickly build serverless functions that integrate with the OpenWeather API and Stable Diffusion AI, in order to generate tailored clothing recommendations.
We used OpenWeather API to fetch real-time data on the current weather, precipitation, and wind speeds in the user's location. Using this information, we were able to generate images of accurate AI clothing recommendations for the weather using Stable Diffusion.

## Challenges we ran into
One of the biggest challenges we encountered was working with Pinterest API. We had to navigate complex documentation to understand how to filter results and extract relevant information. 
We were able to overcome these challenges through testing, debugging, and careful attention to detail. 

## Accomplishments that we're proud of
We're proud of using Stable Diffusion AI to generate images of outfits. Our initial plan of web scraping Pinterest didn't go as planned, but we quickly regrouped and brainstormed for alternative methods, which led us to make something even better!

## What we learned
We learned how to use Autocode and Stable Diffusion, as well as how to make a frontend using Next.js.

## What's next for WeatherWear
Currently, users must input their information each time they want to generate an outfit of the day. A next step for WeatherWear could be to implement a user login and authentication system to make the process more efficient by allowing the user to save their preferences and location. This would also allow users to view their past outfits and ensure the same outfit isn't recommended twice.
