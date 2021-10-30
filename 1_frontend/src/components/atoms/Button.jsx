import styled from "styled-components";
import PropTypes from "prop-types";

// style

const PrimaryButton = styled.button`
  width: 10rem;
  height: 2.2rem;
  color: #000000;
  letter-spacing: 1px;
  margin: 0 0.5;
  background-color: white;
  border-radius: 0.3rem;
  border: 1px solid grey;
  background-image: url("${({ bgImage }) => bgImage}");
  background-repeat: no-repeat;
  background-position: 17%;
  background-size: 12%;
  background-origin: content-box;
  :hover {
    background-color: #4f70b5;
    color: white;
  }
`;

const SecondaryButton = styled.button`
  width: 10rem;
  height: 2.2rem;
  color: white;
  letter-spacing: 1px;
  margin: 0 0.5rem;
  background-color: #4f70b5;
  border-radius: 0.3rem;
  border: 1px solid black;
  background-image: url("${({ bgImage }) => bgImage}");
  background-repeat: no-repeat;
  background-position: 17%;
  background-size: 12%;
  background-origin: content-box;
  :hover {
    background-color: white;
    color: #000000;
  }
`;

const Button = ({ text, action, primary, secondary, bgImage }) => {
  let button;

  console.log(bgImage);

  if (primary)
    button = (
      <PrimaryButton bgImage={bgImage} onClick={action}>
        {text}
      </PrimaryButton>
    );
  if (secondary)
    button = (
      <SecondaryButton bgImage={bgImage} onClick={action}>
        {text}
      </SecondaryButton>
    );
  if (!primary & !secondary)
    button = <PrimaryButton onClick={action}>{text}</PrimaryButton>;
  return button;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  bgImage: PropTypes.string,
};

export default Button;
