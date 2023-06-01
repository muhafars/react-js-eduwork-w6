import React, { useState } from "react";
import "./styles.scss";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Validate email
    if (!email.includes("@")) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError("Password harus lebih dari 6 characters");
    } else {
      setPasswordError("");
    }

    // Submit form if no errors
    if (emailError === "" && passwordError === "") {
      console.log("Login successful");
      // Add code to submit form data here
    }
  };

  return (
    <div className="login-container">
      <h1>Login Validasi</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
