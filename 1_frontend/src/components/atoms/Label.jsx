import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label``;

const Label = ({ label }) => {
  return <StyledLabel for={label.for}>{label.name}</StyledLabel>;
};

Label.propTypes = {
  label: PropTypes.shape({
    for: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default Label;
