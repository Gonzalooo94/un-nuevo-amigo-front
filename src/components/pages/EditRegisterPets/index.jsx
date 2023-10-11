import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PetForm from './PetForm'

import axios from "axios";


export default function EditRegisterPets () {
    const { id } = useParams()

    const [animal, setAnimal] = useState()

    useEffect(() => {
        axios.get(`https://nuevo-amigo-server-production.up.railway.app/animals/${id}`)
            .then(res => {
                console.log('res', res.data)
                setAnimal(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [id])

    if (!animal) {
        return null
    }     
    


    return (
        <PetForm id={id} animal={animal} />
    )
    
}