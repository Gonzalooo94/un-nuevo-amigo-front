import React from 'react'
import { Button, Icon } from "semantic-ui-react"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export  function Logout() {
  const {logout} = useAuth();
  const navigate = useNavigate();
    const sessionClear= () => {
        logout();
        navigate("/");
    }
  return (
    <Button icon basic color="blue" onClick={sessionClear}>
        <Icon name="power off"/> Cerrar cesión
    </Button>
  )
}
