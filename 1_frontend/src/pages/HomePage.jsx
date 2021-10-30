import React, { useState } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

// components
import CloseButton from "../components/atoms/CloseButton";
import RegistrationForm from "../components/organisms/RegistrationForm";
import Modal from "../components/organisms/Modal";
import Button from "../components/atoms/Button";

const StyledHomePage = styled.main`
  height: 100vh;
  width: 100vw;
  .particles {
    z-index: 1;
  }
  .homepage {
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;

const HomePage = () => {
  // hooks
  // state
  const [signupIsOpen, setSignupIsOpen] = useState(false);

  // signup
  const openSignup = () => setSignupIsOpen(true);
  const closeSignup = () => setSignupIsOpen(false);

  return (
    <StyledHomePage className="d-flex align-items-center justify-content-center">
      <div className="homepage d-flex align-items-center justify-content-center">
        <Button
          type="submit"
          text="Sign up"
          action={() => openSignup()}
          primary
        />
        {signupIsOpen && (
          <Modal onClose={closeSignup}>
            <RegistrationForm />
            <CloseButton
              button={{
                text: "X",
                type: "submit",
                action: () => closeSignup(),
              }}
            />
          </Modal>
        )}
      </div>

      <Particles
        lassName="particles"
        params={{
          background: {
            color: {
              value: "#0f2041ad",
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </StyledHomePage>
  );
};

export default HomePage;
