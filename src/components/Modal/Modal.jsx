import { Component } from "react";
import { createPortal } from "react-dom";

import { ModalWrapp, ModalContent } from "./ModalStyled";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleModalClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <ModalWrapp onClick={this.handleModalClick}>
                <ModalContent>{ this.props.children }</ModalContent>
            </ModalWrapp>,
            modalRoot
        )
    }
}

export default Modal;