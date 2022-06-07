import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubmit } from "../redux/actions";
import UserForm from "../components/UserForm.js";

const userInit = {
  id: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  age: 0,
};

export default function UserNew() {
  const { success } = useSelector((state) => state);
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
