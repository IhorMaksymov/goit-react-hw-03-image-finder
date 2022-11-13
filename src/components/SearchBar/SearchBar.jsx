import { FaSearch } from 'react-icons/fa';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
// import * as yup from 'yup';

import { Header, SearchForm, BtmForm, SearchField } from './SearchBarStyled';

// const schema = yup.object().shape({
//     imageName: yup.string().isRequired(),
// })

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (value, { resetForm }) => {
        onSubmit(value);
        resetForm();
    }

    return (
        <Header>
            <Formik
                initialValues={{ imageName: '' }}
                onSubmit={handleSubmit}
                // validationSchema={schema}
            >
                <SearchForm>
                    <BtmForm type="submit">
                        <FaSearch size='20px' />
                    </BtmForm>

                    <SearchField
                      name='imageName'
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </Header>
    )
}

export default SearchBar;

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
} 