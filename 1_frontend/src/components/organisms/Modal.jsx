import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: -100rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  -webkit-animation: slide 0.5s forwards;
  animation: slide 1s forwards;
  z-index: 3;
  @keyframes slide {
    100% {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

const BlurModal = styled.div`
  filter: blur(1rem);
  background-color: #000000;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  border: 2px solid red;
`;

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalWrapper>
        <div>{children}</div>
      </ModalWrapper>
      <BlurModal></BlurModal>
    </>,
    document.getElementById("portal")
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
