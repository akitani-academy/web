import css_index from "../../styles/lp.module.scss";

export default function ModalBox({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className={css_index.modal}>
      <div className={css_index.overlay} onClick={onClose}></div>
      <div className={css_index.close} onClick={onClose}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={css_index.modal__inner}>
        <h3>
          {item.title}
          <small>{item.subtitle}</small>
        </h3>
        <div className={css_index.box}>
          <div
            dangerouslySetInnerHTML={{
              __html: item.modalContent,
            }}
          />
        </div>
      </div>
    </div>
  );
}
