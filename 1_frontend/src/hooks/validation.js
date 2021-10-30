import { useEffect, useState } from "react";

const Validation = ({ controlRef, value, label, isSubmitted, render }) => {
  // hooks
  // state

  const [message, setMessage] = useState(false);

  // side effects

  useEffect(() => {
    if (controlRef && isSubmitted) {
      if (controlRef.current.value.length < 1) {
        controlRef.current.style.border = "2px solid red";
        setMessage(`${label} please fill in the field`);
      } else {
        controlRef.current.style.border = "2px solid green";
        setMessage("");
      }
    }
  }, [value, isSubmitted]);

  return render(message);
};

export default Validation;
