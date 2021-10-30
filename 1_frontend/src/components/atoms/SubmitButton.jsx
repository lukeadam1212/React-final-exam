import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSubmitButton = styled.button`
  height: 2.2rem;
  width: 100%;
  background-color: #f2877d;
  border-radius: 0.3rem;
  border: 1px solid gray;
  color: white;
  :hover {
    background-color: #fd6659;
  }
`;

const SubmitButton = ({ button }) => {
  return (
    <StyledSubmitButton onClick={button.action} type={button.type}>
      {button.text}
    </StyledSubmitButton>
  );
};

SubmitButton.propTypes = {
  button: PropTypes.shape({
    action: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default SubmitButton;
