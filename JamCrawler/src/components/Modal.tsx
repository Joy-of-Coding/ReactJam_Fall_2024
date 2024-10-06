import React from "react";
import "./Modal.css"; // Add modal-specific styles here.

interface ModalProps {
    message: string;
}

const Modal: React.FC<ModalProps> = ({ message }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Modal;
