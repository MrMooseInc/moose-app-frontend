// import {useState} from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState({data: []});
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {
//     setIsLoading(true);
//     try {
//       const {data} = await axios.get('http://localhost:3000/tasks', {
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       console.log('data is: ', JSON.stringify(data, null, 4));

//       setData(data);
//     } catch (err) {
//       setErr(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log(data);

//   return (
//     <div>
//       {err && <h2>{err}</h2>}

//       <button onClick={handleClick}>Fetch data</button>

//       {isLoading && <h2>Loading...</h2>}

//       {data.data.tasks.map(task => {
//         return (
//           <div key={task.id}>
//             <h2>{task.name}</h2>
//             <br />
//           </div>
//         );
//       })}
//       <p>{ JSON.stringify(data) }</p>
//     </div>
//   );
// };

// export default App;

// mycomponent.js
import React, { useEffect, useState} from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:3000/tasks');
        console.log(data);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

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
    </div>
  )
}

export default MyComponent;