import "./SuccessModal.css";

function SuccessModal({ isOpen, onSignInClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="success-modal">
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>

        <button
          className="success-modal__link"
          type="button"
          onClick={onSignInClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
