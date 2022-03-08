import styled from 'styled-components';
import { Theme } from '../../../types/Theme';

export const Button = styled.button<Theme>`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: inherit;
    transition: all ease .2s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.primaryColorHover  };
        border-radius: 20px;
    }
    img {
        height: 15px;
        box-sizing: border-box;
    }
`;