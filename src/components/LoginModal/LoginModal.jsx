import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal({ isOpen, onClose, onLogin, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailInvalid = email.length > 0 && !email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();

    if (isEmailInvalid || !email || !password) {
      return;
    }

    onLogin({
      email,
      password,
    });
  }

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      footer={
        <>
          or{" "}
          <button className="modal__link" type="button" onClick={onSignUpClick}>
            Sign up
          </button>
        </>
      }
    >
      <label className="login-modal__label">
        Email
        <input
          className="login-modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmailInvalid && (
          <span className="login-modal__error">Invalid email address</span>
        )}
      </label>

      <label className="login-modal__label">
        Password
        <input
          className="login-modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
