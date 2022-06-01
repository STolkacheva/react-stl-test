import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--grey);
  border-radius: var(--radius);
  padding: 5px;
  width: 97%;
`;

export default function SelectInput({ name, list, selectedValue, onChange }) {
  const [value, setValue] = useState(selectedValue);

  const onHandleChange = (event) => {
    const { value } = event.target;
    if(list.includes(value)) {
      onChange(name, value);
    }
    setValue(value);
  };

  const onHandleBlur = () => {
    if(list.includes(value)) {
      onChange(name, value);
    }
    setValue(selectedValue)
  }

  const onHandleFocus = () => {
    setValue("")
  }

  return (
    <React.Fragment>
      <Input
        list="data-list"
        name={name}
        value={value}
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        onFocus={onHandleFocus}
      />
      <datalist id="data-list">
        {list.map((data) => (
          <option key={data} value={data} />
        ))}
      </datalist>
    </React.Fragment>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};