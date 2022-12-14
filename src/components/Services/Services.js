import PropTypes from 'prop-types';
import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '29118139-f0fadce498ed45b93da5b0f44';

const getMaterial = async (name, page, perPage) => {
    const options = new URLSearchParams({
        key: API_KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: perPage,
    })

    const response = await axios.get(`${API_URL}?${options}`);
    console.log(response.data)
    return response.data;
}

getMaterial.propTypes = {
    name: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}

export default getMaterial;