import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Tasks from './Components/Tasks.js'
import FrenchiePicture from './Components/FrenchiePicture.js'

function App() {

  const [picture, setPicture] = useState([])
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:3000/tasks');
        const picFromDogAPI = await getPicture()
        setPicture(picFromDogAPI)
        console.log(data);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    
  }, []);

  const getPicture = async () => {
    const res = await fetch('https://dog.ceo/api/breed/bulldog/french/images/random', {
        method: 'GET'
    })
    const data = await res.json()
    console.log(data.message)
    return data.message
  }

 return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div >
        <h2>Tasks:</h2>
        <Tasks data={data} />
      </div>
    )}
    <FrenchiePicture picture={picture} />
    </div>
  )
        }

export default App;