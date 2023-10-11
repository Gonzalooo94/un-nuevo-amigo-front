import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import UserForm from "./userform";

export default function EditRegisterUsers() {const { id } = useParams()

const [user, setUser] = useState()

useEffect(() => {
    axios.get(`https://nuevo-amigo-server-production.up.railway.app/users/${id}`)
        .then(res => {
            console.log('res', res.data)
            setUser(res.data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
}, [id])

if (!user) {
    return null
}     


return (
    <UserForm id={id} user={user} />
)

}
