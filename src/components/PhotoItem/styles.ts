import styled from 'styled-components';

export const Container = styled.div`
    // background-color: #3D3F43;
    // border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    transition: all ease .2s;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        margin-top: 10px;
        padding: 8px 16px;
        text-align: center;
        background-color: #8B0000;
        color: #FFF;
        font-size: 15px;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        transition: all ease .2s;
        transform: scale(.9);
        
        &:hover {
            transform: scale(1);
        }
    }
`;