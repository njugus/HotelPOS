import React from "react";
import "../styles/auth.css";

const AuthFormWrapper = ({ title, children }) => {
  return (
    <div className="auth-container">
      <h2 className="auth-header">{title}</h2>
      <div className="auth-form">{children}</div>
    </div>
  );
};

export default AuthFormWrapper;
