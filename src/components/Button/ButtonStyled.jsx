import styled from "styled-components";

export const LoadBtn = styled.button`
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.btnColor};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: ${p => p.theme.colors.baseWhite};
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 24px;
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    min-width: 180px;
    margin-bottom: ${p => p.theme.space[6]}px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover,
      &:focus {
        background-color: ${p => p.theme.colors.hoverBtnColor};
      }
`;