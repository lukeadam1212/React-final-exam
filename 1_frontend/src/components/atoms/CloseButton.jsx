import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  color: #850000;
  :active {
    background-color: rgba(228, 15, 0, 0.5);
    color: black;
  }
`;

const CloseButton = ({ button }) => {
  return (
    <StyledCloseButton type={button.type} onClick={button.action}>
      {button.text}
    </StyledCloseButton>
  );
};

CloseButton.propTypes = {
  button: PropTypes.exact({
    action: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default CloseButton;
