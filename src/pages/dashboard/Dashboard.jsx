import React, { useEffect, useState } from 'react';
import axios from "axios"
axios.defaults.withCredentials = true
const Dashboard = () => {
const [user, setUser] = useState();

    const sendRequest = async () =>{
        const res = await axios.get("https://simplor.herokuapp.com/api/user", {
            withCredentials: true
        }) .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }

    useEffect(() =>{
        sendRequest().then((data) => setUser(data.user));
    }, [])
  return (
    <div>
{user && <h1>{user.first_name}</h1>}
    </div>
  )
}

export default Dashboard