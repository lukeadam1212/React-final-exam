import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// components
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import SubmitButton from "../atoms/SubmitButton";

// images
import user from "../../assets/images/user-1.svg";
import envelope from "../../assets/images/envelope-1.svg";
import lock from "../../assets/images/lock-1.svg";
import Validation from "../../hooks/validation";

const StyledInputFields = styled.form`
  width: 80%;
  height: 50%;
  .input-section {
  }
`;

const InputFields = () => {
  // hooks
  // state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ref
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // side Effects
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // custom functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (name.length < 1 || email.length < 1 || password.length < 1) {
      return console.log("error... fields empty");
    } else {
      prompt("form sent!");
    }

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
  };

  return (
    <StyledInputFields
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-between"
    >
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "name",
            name: "Name",
          }}
        />
        <Validation
          controlRef={nameRef}
          value={name}
          label="Name"
          isSubmitted={submitted}
          render={(message) => (
            <Input
              bgImage={user}
              id="name"
              value={name}
              controlRef={nameRef}
              message={message}
              action={() => {
                setName(nameRef.current.value);
              }}
              input={{
                type: "text",
                placeholder: "John Monroe",
              }}
            />
          )}
        />
      </div>
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "email",
            name: "Email",
          }}
        />
        <Validation
          controlRef={emailRef}
          value={email}
          label="Email"
          isSubmitted={submitted}
          render={(message) => (
            <Input
              bgImage={envelope}
              id="email"
              value={email}
              controlRef={emailRef}
              message={message}
              action={() => {
                setEmail(emailRef.current.value);
              }}
              input={{
                type: "text",
                placeholder: "john.monroe@mail.com",
              }}
            />
          )}
        />
      </div>
      <div className="input-section d-flex flex-column align-items-start">
        <Label
          label={{
            for: "password",
            name: "Password",
          }}
        />
        <Validation
          controlRef={passwordRef}
          value={password}
          label="Email"
          isSubmitted={submitted}
          render={(message) => (
            <Input
              bgImage={lock}
              id="email"
              value={password}
              controlRef={passwordRef}
              message={message}
              action={() => {
                setPassword(passwordRef.current.value);
              }}
              input={{
                type: "password",
                placeholder: "*********",
              }}
            />
          )}
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
