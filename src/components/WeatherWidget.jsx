import React, {useState, useMemo, useContext} from "react";
import SessionContext from "../SessionContext";

const {user} = useContext(SessionContext);

const users = [
    { id: 1, name: 'John Doe', age: 25},
    { id: 2, name: 'Bob Marlay', age:22},
    { id: 3, name: 'Ken Benlay', age:32},
    { id: 4, name: 'Rony Stephen', age: 51}
    //Imagine this has milions of records
  ];

  const getData = async () => {
    try {
    
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: '',
      });
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

const UserList = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    if(user.token != '')
        console.log(user.token);
    const filtredUsers = useMemo(() => {
        console.log("Filtering users...");
        return users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    },[searchTerm]);

    return (
    <div>
        <input type="text" placeholder="Search users" value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {
                filtredUsers.map((user) =>
                (<li key={user.id}>
                    {user.name} - Age {user.age}
                </li>))
            }
        </ul>
    </div>)
}

export default UserList;