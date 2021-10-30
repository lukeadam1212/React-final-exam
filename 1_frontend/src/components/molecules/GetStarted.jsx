import React from "react";
import styled from "styled-components";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import Button from "../atoms/Button";

const StyledGetStarted = styled.div`
  height: 30%;
  width: 80%;
  .pink {
    color: #f2877d;
  }
`;
const GetStarted = () => {
  return (
    <StyledGetStarted className="d-flex align-items-start justify-content-around flex-column">
      <h2>Get Started</h2>
      <p className="text-secondary">Already have an account?</p>
      <p className="pink">Log In</p>
      <div className="twoButtons d-flex">
        <Button
          bgImage={google}
          primary
          text="sign up"
          action={() => console.log("clicked sign up")}
          type="submit"
        />
        <Button
          bgImage={facebook}
          secondary
          text="sign up"
          action={() => console.log("clicked sign up")}
          type="submit"
        />
      </div>
    </StyledGetStarted>
  );
};

export default GetStarted;
