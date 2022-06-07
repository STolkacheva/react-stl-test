import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSorting } from "../redux/actions";
import styled from "styled-components";

export const SortPanelEl = styled.div`
  margin-bottom: 15px;
`;
export const Select = styled.select`
  border: 1px solid var(--grey);
  border-radius: var(--radius);
  padding: 5px;
  background: var(--white);
  color: var(--black);
`;

export default function SortPanel() {
  const { sort } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onHandleSort = (event) => {
    const { value } = event.target;
    dispatch(userSorting(value));
  };

  return (
    <SortPanelEl>
      <Select onChange={onHandleSort} defaultValue={sort}>
        <option value="">Выберите сортировку</option>
        <option value="name">Name</option>
        <option value="email">E-mail</option>
        <option value="country">Country</option>
        <option value="Age">Age</option>
      </Select>
    </SortPanelEl>
  );
}
