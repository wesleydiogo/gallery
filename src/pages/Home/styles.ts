import styled from 'styled-components';

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;

`;
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;
export const Loading = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
export const PhotoList = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    // gap: 5px;
    // display: grid;
    // grid-template-columns: repeat(4, 1fr);
`;
export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756Df4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transform: scale(.9);
        transition: all ease .2s;

        &:hover {
            transform: scale(1);
        }
    }
`;