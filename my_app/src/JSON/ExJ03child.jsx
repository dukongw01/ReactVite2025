import { useEffect, useState } from "react";

export default function ExJ03child(props){

    const[userList, setUserList]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUserList(data))
    },[])

    return(
        <>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}