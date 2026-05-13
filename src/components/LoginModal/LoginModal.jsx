import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal() {
  return (
    <ModalWithForm title="Sign in" buttonText="Sign in">
      <label className="login-modal__label">
        Email
        <input
          className="login-modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>

      <label className="login-modal__label">
        Password
        <input
          className="login-modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
