
import "../styles/Button.css";
import React from "react";

function Button({ label, onClick }) {
  return (
    <button aria-label="On Click" onClick={onClick} className="btn" type="submit">
      {label}
    </button>
  );
}
export default Button;