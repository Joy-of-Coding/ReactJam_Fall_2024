import React from "react";
import "./Modal.css";

interface ModalProps {
    showModal: string | null;
    setShowModal: (value: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
    if (!showModal) return null; //SAM Only show the modal if showModal is not null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{showModal}</h2>
                <button onClick={() => setShowModal(null)}>Close</button> {/* Button to close the modal */}
            </div>
        </div>
    );
};

export default Modal;
