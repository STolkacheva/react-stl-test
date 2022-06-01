import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm.js";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUpdate } from "../actions/actionCreators";

export default function UserPage() {
  const [user, setUser] = useState();
  const item = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(item);
  }, [item]);

  const changeField = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = () => {
    dispatch(fetchUpdate(user));
    navigate(`/`);
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
