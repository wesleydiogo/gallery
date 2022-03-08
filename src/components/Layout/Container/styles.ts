import styled from "styled-components";
import { Theme } from "../../../types/Theme";

export const Container = styled.div<Theme>`
font-family: 'Roboto', sans-serif;
background-color: ${props => props.theme.backgroundColor};
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 760px) {
    padding: 20px 0;
    align-items: start;
};
`;