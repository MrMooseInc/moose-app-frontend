import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Tasks from './Components/Tasks.js'
import FrenchiePicture from './Components/FrenchiePicture.js'
import Task from './Components/Task.js';

function App() {

  const [picture, setPicture] = useState([])
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const URL = process.env.REACT_APP_REST_URL

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${URL}/tasks`);
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

  const addDose = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}/add_dose`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Task),
    })

    const dose_data = await res.json()
    console.log("Dose added:", dose_data.task.doses_given)
    
    setData(data.map((task) =>
        task.id === id ? { ...task, doses_given: dose_data.task.doses_given } : task
      ),
    )
  }

  const removeDose = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}/remove_dose`, {
      method: 'DELETE'
      })
    
      const dose_data = await res.json()
      console.log("Dose Removed: ", dose_data.task.doses_given)

      setData(
        data.map((task) => 
          task.id === id ? {...task, doses_given: dose_data.task.doses_given } : task
        )
      )
  }

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div >
        <h2>Tasks:</h2>
        <Tasks data={data} onAddDose={addDose} onRemoveDose={removeDose}/>
      </div>
    )}
    <FrenchiePicture picture={picture} />
    </div>
  )
}

export default App;