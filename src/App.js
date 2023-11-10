import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js'
import FrenchiePicture from './Components/FrenchiePicture.js'
import Task from './Components/Task.js';
import AddTask from './Components/AddTask.js';


function App() {

  const [picture, setPicture] = useState([])
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  const URL = process.env.REACT_APP_REST_URL

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${URL}/tasks`);
        const picFromDogAPI = await getPicture();
        setPicture(picFromDogAPI);
        console.log(data);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const getPicture = async () => {
    const res = await fetch(
      "https://dog.ceo/api/breed/bulldog/french/images/random",
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log(data.message);
    return data.message;
  };

  const addDose = async (id) => {
    const res = await axios(`${URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Task),
    });

    const dose_data = await res.json();
    console.log("Dose added:", dose_data.task.doses_given);

    setData(
      data.map((task) =>
        task.id === id
          ? { ...task, doses_given: dose_data.task.doses_given }
          : task
      )
    );
  };

  const removeDose = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}/remove_dose`, {
      method: "DELETE",
    });

    const dose_data = await res.json();
    console.log("Dose Removed: ", dose_data.task.doses_given);

    setData(
      data.map((task) =>
        task.id === id
          ? { ...task, doses_given: dose_data.task.doses_given }
          : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    console.log(task);
    setData([...data, newTask]);
  };

  const editTask = async (task, id) => {
    console.log(task, id);
    const res = await fetch(`${URL}/tasks/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    console.log(newTask);
    setData(
      data.map((task) =>
        task.id === id
          ? { ...task, name: newTask.task.name, doses_required: newTask.task.doses_required }
          : task
      )
    );
    };
  

  const deleteTask = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}/`, {
      method: "DELETE",
    });
    setData(data.filter((task) => task.id !== id));
    const tasks = await res.json();
    console.log("Here's the tasks array:", tasks);
  };

  return (
    <div>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "200px",
            height: "200px",
            marginLeft: "-100px",
            marginTop: "-100px",
          }}
        >
          <h1 style={{textAlign:'center'}}>Loading task tracker!</h1>
          <img style={{animation:'rotation 1s infinite linear'}} src={process.env.PUBLIC_URL + "apple-touch-icon.png"}></img>
        </div>
      )}
      {!loading && (
        <div>
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && (
            <AddTask
              onAdd={addTask}
              showAdd={() => setShowAddTask(!showAddTask)}
            />
          )}
          {!showAddTask && (
            <Tasks
              data={data}
              onAddDose={addDose}
              onRemoveDose={removeDose}
              onDeleteTask={deleteTask}
              onEdit={editTask}
            />
          )}
          <FrenchiePicture picture={picture} />
        </div>
      )}
    </div>
  );
}

export default App;
