import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/actions";
import PropTypes from "prop-types";
import styled from "styled-components";

export const UserItemEl = styled.div`
  width: 300px;
  margin-bottom: 20px;    
  margin-right: 20px;
  padding: 10px;
  border-radius: var(--radius);
  border: 1px solid var(--grey);
`;
export const UserItemInfo = styled.div`
  > div {
    margin-bottom: 7px;
  }
`;
export const ItemTitle = styled.label`
  color: var(--black);
  font-weight: var(--fw-bold);
  margin-right: 7px;
`;
export const ItemValue = styled.label``;
export const Button = styled.button`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function UserItem({ user }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHandleInfo = (item) => {
    navigate(`/${item.id}`);
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <UserItemEl>
      <UserItemInfo>
        <div>
          <ItemTitle>Name: </ItemTitle>
          <ItemValue>{user.name}</ItemValue>
        </div>
        <div>
          <ItemTitle>Phone: </ItemTitle>
          <ItemValue>{user.phone}</ItemValue>
        </div>
        <div>
          <ItemTitle>Email: </ItemTitle>
          <ItemValue>{user.email}</ItemValue>
        </div>
        <div>
          <ItemTitle>Country: </ItemTitle>
          <ItemValue>{user.country}</ItemValue>
        </div>
        <div>
          <ItemTitle>Age: </ItemTitle>
          <ItemValue>{user.age}</ItemValue>
        </div>
      </UserItemInfo>
      <Button onClick={() => onHandleInfo(user)}>Update</Button>
      <Button onClick={() => handleRemove(user.id)}>Delete</Button>
    </UserItemEl>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};