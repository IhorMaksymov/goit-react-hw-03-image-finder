import { LoadBtn } from "./ButtonStyled";

const Button = ({loadMore}) => {
    return (
        <>
            <LoadBtn type='button' onClick={loadMore}>Load more</LoadBtn>
        </>
    )
}

export default Button;