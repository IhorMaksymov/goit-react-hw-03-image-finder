import PropTypes from 'prop-types';

import ImageGalleryItem from "./ImageGalleryItem";
import { GalleryList } from "./ImageGalleryStyled";
import { Box } from "components/Box/Box";

const ItemGallery = ({items,  ...otherProps }) => {
    return (
        <Box
            pt={5}
            width='1330px'
        >
            <GalleryList>
                {items.map(({ id, webformatURL, largeImageURL, tags }) =>
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} {...otherProps} />)}
            </GalleryList>
        </Box>
    )
}

export default ItemGallery;

ItemGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}