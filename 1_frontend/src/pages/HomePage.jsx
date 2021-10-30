import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from "../components/atoms/CloseButton";
import RegistrationForm from "../components/organisms/RegistrationForm";
import Modal from "../components/organisms/Modal";
import Button from "../components/atoms/Button";
import Particles from "react-tsparticles";

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
        className="particles"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#202020",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </StyledHomePage>
  );
};

export default HomePage;
