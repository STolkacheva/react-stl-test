import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import UserItem from "./UserItem";
import { fetchUsers } from "../../store/usersSlice";

export const UserListEl = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-l);
  line-height: var(--lh-largh);
`;
export const Button = styled.button``;

export default function UserList() {
  const { users, sort, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, sort]);

  if (loading) {
    return <h1>Loading ... </h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleNewUser = () => {
    navigate(`/new`);
  };

  return (
    <div>
      <Title>Список пользователей</Title>
      <UserListEl>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </UserListEl>
      <Button onClick={handleNewUser}>Create New</Button>
    </div>
  );
}
