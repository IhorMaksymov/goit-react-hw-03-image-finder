import PropTypes from 'prop-types';
import { Item, ItemImage, ModalImage } from "./ImageGalleryItemStyled";
import Modal from "components/Modal/Modal";
import { Component } from "react";

class ImageGalleryItem extends Component {

    state = {
        showModal: false
    }

    toggleModal = () => {  
      this.setState(({ showModal }) => ({
          showModal: !showModal,
      }))
    }

    render() {

        const { showModal } = this.state;
        const { webformatURL, largeImageURL, tags } = this.props;

        return (
            <>
                <Item onClick={this.toggleModal} >
                    <ItemImage src={webformatURL} alt={tags} />
                </Item>
                {showModal && <Modal onClose={this.toggleModal}>
                    <ModalImage src={largeImageURL} alt={tags} />
                </Modal>}
            </>
        )
    }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    showModal: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}