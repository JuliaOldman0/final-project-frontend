import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  footer,
  isSubmitDisabled,
}) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            className="modal__submit"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>

          {footer && <p className="modal__footer">{footer}</p>}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
