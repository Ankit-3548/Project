import React, { useEffect, useState } from 'react'

export default function Hooks() {

    const[users, setUsers] = useState([]);

    // useEffect(() =>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    // })
    const getUsers = async() => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    },[])

  return (
    <div>
        {
            users.map((user) => (
                <h1 key={user.id}>{user.email}</h1>
            ))
        }
    </div>
  )
}
