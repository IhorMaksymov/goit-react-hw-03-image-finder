import PropTypes from 'prop-types';

import { LoadBtn } from "./ButtonStyled";

const Button = ({loadMore}) => {
    return (
            <LoadBtn type='button' onClick={loadMore}>Load more</LoadBtn>
    )
}

export default Button;

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}