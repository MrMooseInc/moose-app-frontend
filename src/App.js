import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Task from './Components/Task.js'
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
        
        {data.map(task => (<p key={task.id}>
          {task.id}. {task.name}, Doses Requred: {task.doses_required}. Doses Given: {task.doses_given}</p>))}
      </div>
    )}
    <FrenchiePicture picture={picture} />
    </div>
  )
        }

export default App;