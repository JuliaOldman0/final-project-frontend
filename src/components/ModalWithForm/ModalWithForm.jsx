import "./ModalWithForm.css";

function ModalWithForm({ title, buttonText, children }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" type="button">
          ×
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
