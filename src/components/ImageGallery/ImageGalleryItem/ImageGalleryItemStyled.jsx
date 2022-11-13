import styled from "styled-components";

export const Item = styled.li`
    border-radius: 2px;
`;

export const ItemImage = styled.img`
    width: 100%;
    height: 260px; 
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalImage = styled.img`
    width: 100%;
    object-fit: cover;
`;