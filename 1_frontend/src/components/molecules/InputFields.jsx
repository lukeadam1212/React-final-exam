import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import SubmitButton from "../atoms/SubmitButton";

// images
import user from "../assets/images/user-1.svg";
import envelope from "../assets/images/envelope-1.svg";
import lock from "../assets/images/lock-1.svg";

const StyledInputFields = styled.div`
  width: 80%;
  height: 50%;
  .input-section {
  }
`;

const InputFields = () => {
  return (
    <StyledInputFields className="d-flex flex-column justify-content-between">
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "name",
            name: "Name",
          }}
        />
        <Input
          bgImage={user}
          input={{
            type: "text",
            placeholder: "John Monroe",
          }}
        />
      </div>
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "email",
            name: "Email",
          }}
        />
        <Input
          bgImage={envelope}
          input={{
            type: "text",
            placeholder: "john.monroe@mail.com",
          }}
        />
      </div>
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "password",
            name: "Password",
          }}
        />
        <Input
          bgImage={lock}
          input={{
            type: "password",
            placeholder: "*****",
          }}
        />
      </div>
      <SubmitButton
        button={{
          type: "submit",
          text: "Submit",
          action: () => console.log("Submit form"),
        }}
      />
    </StyledInputFields>
  );
};

export default InputFields;
