
import React,{useState} from 'react';
import './styles.css';
const App=()=>{

  const [users, setUsers] = useState([]);

  const loadUsers = async()=>{

   // console.log('before');

     const response= await fetch("https://reqres.in/api/users?page=1");
   // const response= await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);
    console.log(users);
  };

  return(
 <div className="App">

      <h1> Hello All </h1>

      <button onClick={loadUsers}>get data</button>
      
      <h2>Users</h2>
        <ul>
        {users.map(({id, email,first_name,last_name})=>(
          <li key={id}>
            Name : {first_name} {last_name} Email: {email}        
          </li>
        ))}
      </ul>

    </div>
  )
}
export default App;