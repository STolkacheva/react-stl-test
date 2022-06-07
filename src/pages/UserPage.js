import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUpdate } from "../actions/actionCreators";

export default function UserPage() {

  const { users, success } = useSelector((state) => state);
  const [user, setUser] = useState();

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(users.find(u => u.id == params.id));
  }, [params.id]);

  useEffect(() => {
    success && navigate(`/`);
  }, [success]);

  const changeField = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = () => {
    dispatch(fetchUpdate(user));
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
