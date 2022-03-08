import styled from 'styled-components';
import { Theme } from '../../../types/Theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;  
`;
export const Label = styled.label<Theme>`
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
`;
export const Input = styled.input<Theme>`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: all ease .2s;
    display: flex;

    &:focus {
        border: 1px solid ${props => props.theme.primaryColor};
        border-radius: 20px;
    }
`;