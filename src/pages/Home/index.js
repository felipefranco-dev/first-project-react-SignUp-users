import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { Conteiner, Image, ConteinerItens, H1, InputLabel, Input, Button } from "./styles";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const history = useHistory()

  const addNewUser = async () => {

    const data = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value })
    const newUser = data.data

    setUsers([ ...users, newUser ])

    history.push("/users")
  }


  return (<Conteiner>

    <Image src={People} />

    <ConteinerItens>

      <H1>Olá!</H1>

      <InputLabel>Name</InputLabel>
      <Input ref={inputName} placeholder="Felipe" />

      <InputLabel>Age</InputLabel>
      <Input ref={inputAge} placeholder="23" />

      <Button onClick={addNewUser}>Sign Up <img src={Arrow} /></Button>


    </ConteinerItens>

  </Conteiner>

  );


}

export default App
