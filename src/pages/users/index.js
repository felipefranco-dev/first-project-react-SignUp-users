import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { Conteiner, Image, ConteinerItens, H1, Button, User } from "./styles";

import Avatar from "../../assets/users.svg"
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.png";

const Users = () => {

  const [users, setUsers] = useState([])

  const history = useHistory()

  useEffect(() => {

    async function fetchUsers () {
    const { data: newUser } = await axios.get("http://localhost:3001/users")
    setUsers(newUser)
    }

    fetchUsers ()

  }, [])

  const deleteUser = async (userId) => {

    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  const goBack = () => {
    history.push("/")
  }

  return (<Conteiner>

    <Image src={Avatar} />

    <ConteinerItens>

      <H1>Users</H1>

      <ul>
        {users.map(user => (

          <User key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}><img src={Trash} /></button>
          </User>

        ))}
      </ul>

      <Button onClick={goBack}> <img src={Arrow}/> Back  </Button>

    </ConteinerItens>

  </Conteiner>

  );

}

export default Users
