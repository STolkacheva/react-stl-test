import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../actions/actionCreators";
import styled from "styled-components";

export const SortPanelEl = styled.div`
  margin-bottom: 15px;
`;
export const Button = styled.button`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function SortPanel() {

  const dispatch = useDispatch();

  const onSort = (event) => {
    dispatch(fetchUsers(event.target.name));
  };

  return (
    <SortPanelEl>
      <Button name="name" onClick={onSort}>Name</Button>
      <Button name="email" onClick={onSort}>E-mail</Button>
      <Button name="country" onClick={onSort}>Country</Button>
      <Button name="age" onClick={onSort}>Age</Button>
    </SortPanelEl>
  );
}
