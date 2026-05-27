import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal({
  isOpen,
  onClose,
  onSignInClick,
  onRegistrationSuccess,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isEmailInvalid = email.length > 0 && !email.includes("@");

  const isSubmitDisabled = !email || !password || !username || isEmailInvalid;

  function handleSubmit(e) {
    e.preventDefault();

    if (isEmailInvalid || !email || !password || !username) {
      return;
    }

    onRegistrationSuccess({
      email,
      username,
    });

    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      footer={
        <>
          or{" "}
          <button className="modal__link" type="button" onClick={onSignInClick}>
            Sign in
          </button>
        </>
      }
    >
      <label className="register-modal__label">
        Email
        <input
          className="register-modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmailInvalid && (
          <span className="register-modal__error">Invalid email address</span>
        )}
      </label>

      <label className="register-modal__label">
        Password
        <input
          className="register-modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label className="register-modal__label">
        Username
        <input
          className="register-modal__input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
