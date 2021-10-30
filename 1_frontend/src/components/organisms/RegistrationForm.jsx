import React from "react";
import styled from "styled-components";

// components
import GetStarted from "../molecules/GetStarted";
import InputFields from "../molecules/InputFields";

// images
import image from "../../assets/images/image.jpg";
import logo from "../../assets/images/logo.png";

const StyledRegistrationForm = styled.section`
  height: 35rem;
  width: 55rem;
  border-radius: 0.5rem;
  background-color: white;
  margin: 2rem;
  border: 2px solid #f2877d;
  .left-registration-form {
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    width: 50%;
    position: relative;
    border-radius: 0.5rem 0 0 0.5rem;

    .logo {
      position: absolute;
      left: 5%;
      top: 5%;
      height: 5rem;
      animation: rotate 10s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  }
  .right-registration-form {
    width: 50%;
    height: 100%;
  }
`;

const RegistrationForm = () => {
  return (
    <StyledRegistrationForm className="d-flex">
      <div className="left-registration-form d-flex align-items-end justify-content-center p-3">
        <h4 className="text-light text-center w-75">
          Start for free & Get Attractive Offers Today !
        </h4>

        <img className="logo" src={logo} alt="" />
      </div>

      <div className="right-registration-form d-flex align-items-center justify-content-around flex-column p-3">
        <GetStarted />
        <h2>Or</h2>
        <InputFields />
      </div>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
