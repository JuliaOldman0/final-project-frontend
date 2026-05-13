import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal() {
  return (
    <ModalWithForm title="Sign up" buttonText="Sign up">
      <label className="register-modal__label">
        Email
        <input
          className="register-modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>

      <label className="register-modal__label">
        Password
        <input
          className="register-modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>

      <label className="register-modal__label">
        Username
        <input
          className="register-modal__input"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
