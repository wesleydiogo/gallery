import styled from 'styled-components';

export const Card = styled.div`
    background-color: #F5F5F5;
    width: 400px;
    margin: 0 20px;
    border-radius: 4px;
    box-shadow: 0 0 3px ${props => props.theme.primaryColor};
`;