import styled from "styled-components";
import { Theme } from "../../../types/Theme";

export const Logo = styled.div<Theme>`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.primaryColor};

    img {
        max-width: 150px;
        max-height: 150px;
        box-sizing: border-box;
    }
`;