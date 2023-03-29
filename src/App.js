import React, { useState,useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Users from './components/Users/Users';
import Input from './components/Input/Input';

function App() {
  const [users, setUsers] = useState([]) //always initialize the useState function  (empty array of users)
  const [inputVal, setInputVal] = useState("") //initialize the useState to empty string

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data)) 
    console.log(users)
    console.log("Iran fetch")
  }
  const handleChange = (e) => {
    const val = e.target.value
    setInputVal(val)
    console.log(inputVal)
    console.log("Iran")
  } 

  useEffect(() => {
      //handleClick()
  },[inputVal])

  const newList = users.filter(user => user.name.toLowerCase().includes(inputVal.toLowerCase()))
  
  return (
    <div className="App">
      <h3>Users:</h3>
      <Input type="text" id="userInput" value={inputVal} name="userInput" onChange={handleChange} /> 
      <Button type="button" className="btn" onClick={handleClick} innerText="Load Users" />
      <Users users={newList} />
    </div>
  );
}

export default App;
