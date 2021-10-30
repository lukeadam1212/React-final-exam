import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid black;
  background-image: url("${({ bgImage }) => bgImage}");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 6%;
  background-origin: content-box;
  outline: none;
  :focus {
    border: 2px solid #719ece;
  }
  ::placeholder {
    padding-left: 2rem;
  }
`;

const Input = ({ input, id, action, controlRef, value, bgImage, message }) => {
  return (
    <>
      <StyledInput
        bgImage={bgImage}
        id={id}
        onChange={action}
        placeholder={input.placeholder}
        ref={controlRef}
        type={input.type}
        value={value}
      />
      {message && <p className="text-warning">{message}</p>}
    </>
  );
};

Input.propTypes = {
  bgImage: PropTypes.string,
  input: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,

    value: PropTypes.string,
  }),
};
export default Input;
