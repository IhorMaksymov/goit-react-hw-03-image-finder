import styled from "styled-components";

export const ModalWrapp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 800px;
    width: 100%;
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.baseWhite};
    border-radius: ${p => p.theme.radii.normal};
`;