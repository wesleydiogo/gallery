import styled from "styled-components";
import { Theme } from "../../../types/Theme";

export const Container = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;