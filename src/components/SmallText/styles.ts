import styled from "styled-components";

type Props = {
    justify?: string
}

export const Small = styled.small<Props>`

    p {
        text-align: ${({justify}) => justify};
        padding: 10px;
        a {
            text-decoration: none;
            font-weight: bold;
            color: ${({theme}) => theme.primaryColor};
            transition: all ease .2s;
        }
        a: hover {
            color: ${({theme}) => theme.primaryColorHover};
        }
}
`;