import Task from './Components/Task.js'
import FrenchiePicture from './Components/FrenchiePicture.js'
import { useState, useEffect } from 'react'

function App() {

  const [picture, setPicture] = useState([])

  useEffect(()=> {
    const getPic = async () => {
      const picFromDogAPI = await getPicture()
      setPicture(picFromDogAPI)
    }
    getPic()
  }, [])

  const getPicture = async () => {
    const res = await fetch('https://dog.ceo/api/breed/bulldog/french/images/random', {
        method: 'GET'
    })
    const data = await res.json()
    console.log(data.message)
    return data.message
  }

  return (

      <div className='header'>
        <Task />
        <FrenchiePicture picture={picture} />
      </div>
    
  );
}

export default App;
