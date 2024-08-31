import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)
  useEffect(() => {
    if (weather.conditions) {
      const condition = weather.conditions.toLowerCase();
      if (condition.includes('snow') || condition.includes('blizzard') || condition.includes('flurries')) {
        setImage(Snow);
      } else if (condition.includes('cloud')) {
        setImage(Cloudy);
      } else if (condition.includes('rain')) {
        setImage(Rainy);
      } else if (condition.includes('fog')) {
        setImage(Fog);
      } else if (condition.includes('thunder') || condition.includes('storm')) {
        setImage(Stormy);
      } else if (condition.includes('clear')) {
        setImage(Sunny);
      }
    }
  }, [weather]);
  
  

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout