import styled from "styled-components";
import { Form, Field } from 'formik';

export const Header = styled.header`
    width: 100%;
    top: 0;
    left: 0;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.baseWhite};
    background-color: ${p => p.theme.colors.btnColor};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: ${p => p.theme.colors.baseWhite};
    border-radius: ${p => p.theme.radii.normal};
    overflow: hidden;
`;

export const BtmForm = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url();
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;

export const SearchField = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: ${p => p.theme.fontSizes.l};
    border: none;
    outline: none;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    &::placeholder {
        font: inherit;
        font-size: ${p => p.theme.fontSizes.m};
    }
`;