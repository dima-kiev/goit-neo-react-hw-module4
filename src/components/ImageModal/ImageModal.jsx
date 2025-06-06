import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, img: { alt, src } }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modalContainer}
      overlayClassName={css.modalOverlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img alt={alt} src={src} className={css.modalImg} />
    </Modal>
  );
};

export default ImageModal;
