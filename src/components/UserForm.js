import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SelectInput from "./SelectInput";
import { useSelector } from "react-redux";

export const UserInfoEl = styled.div``;
export const User = styled.div`
  min-width: 300px;
  max-width: 500px;
  box-sizing: border-box;
  border-radius: var(--radius);
  border: 1px solid var(--grey);
  padding: 10px;
  margin-bottom: 15px;

  p {
    font-size: var(--fs-s);
  }
`;
export const Input = styled.input`
  border: 1px solid var(--grey);
  border-radius: var(--radius);
  padding: 5px;
  width: 97%;
`;
export const Button = styled.button`
  margin-right: 5px;
`;
export const ButtonSubmit = styled(Button)`
  background: var(--blue);
  color: var(--white);
`;
export const Title = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-l);
  line-height: var(--lh-largh);
`;

export default function UserForm({ user, onSubmit, onChange, onCancel }) {

  const { error, loading } = useSelector((state) => state.users);

  const onChangeField = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const onHandleCancel = () => {
    onCancel();
  };

  if (loading) {
    return <h1>Loading ... </h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!user) {
    return null;
  }

  return (
    <UserInfoEl>
      <div>
        <Title>Профиль пользователя</Title>
      </div>
      <form onSubmit={onHandleSubmit}>
        <User>
          <p>Name</p>
          <Input
            name="name"
            value={user.name}
            onChange={onChangeField}
            required
          />
          <p>Phone</p>
          <Input name="phone" value={user.phone} onChange={onChangeField} />
          <p>E-mail</p>
          <Input name="email" value={user.email} onChange={onChangeField} />
          <p>Country</p>
          <SelectInput
            name="country"
            list={["Australia", "Russia", "USA"]}
            selectedValue={user.country}
            onChange={onChange}
          />
          <p>Age</p>
          <Input
            name="age"
            type="number"
            value={user.age}
            onChange={onChangeField}
          />
        </User>
        <Button onClick={onHandleCancel}> Cancel </Button>
        <ButtonSubmit type="submit"> Save </ButtonSubmit>
      </form>
    </UserInfoEl>
  );
}

UserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
