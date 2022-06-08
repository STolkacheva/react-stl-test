import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../components/UserForm.js";
import { fetchSubmit } from "../store/usersSlice.js";

const userInit = {
  id: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  age: 0,
};

export default function UserNew() {
  const { success } = useSelector((state) => state.users);
  const [user, setUser] = useState(userInit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    success && navigate(`/`);
  }, [success]);

  const changeField = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = () => {
    dispatch(fetchSubmit(user));
  };

  const close = () => {
    navigate(`/`);
  };

  return (
    <React.Fragment>
      <UserForm
        user={user}
        onSubmit={submit}
        onChange={changeField}
        onCancel={close}
      />
    </React.Fragment>
  );
}
