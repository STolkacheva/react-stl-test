import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSubmit } from '../actions/actionCreators';
import UserForm from "../components/UserForm.js";

const userInit = {
    id: "",
    name: "",
    email: "",
    phone: "",
    country : "",
    age: 0
};

export default function UserNew() {
  const [user, setUser] = useState(userInit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeField = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = () => {
    dispatch(fetchSubmit(user)); 
    navigate(`/`);
  };

  const close = () => {
    navigate(`/`);
  };

  return (
    <React.Fragment>
      <UserForm user={user} onSubmit={submit} onChange={changeField} onCancel={close}/>
    </React.Fragment>
    )
    
};