import styled from 'styled-components';

export const InfoContainer = styled.div`
    padding: 2rem;
    color: #ffffff;
    background: ${({ lightBg }) => (lightBg? '#ffffff': '#000000')}; 

    @media screen and (max-width: 48em){
        padding: 10rem 0;
    }
`;

export const InfoWrapper = styled.div`
    max-width: 100%;
    height: 59rem;
    padding: 2rem;
    display: flex;
    flex-direction: center;

    @media screen and (max-width: 48em){
        height: 100%;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    flex-direction: ${({ imgStart }) => (imgStart? 'row-reverse':  'row')};

    @media screen and (max-width: 48em){
        flex-direction: ${({ imgStart }) => (imgStart? 'column-reverse':  'column')};
        align-content: space-between;
    }
`;

export const Column1 = styled.div`
    flex: 60%;
    padding: 1rem;
    margin: 0 1rem;

    @media screen and (max-width: 48em){
        flex: 100%;
        margin: 1rem;
    }
`;

export const Column2 = styled.div`
    flex: 40%;
    padding: 2rem;
    margin: 1rem;

    @media screen and (max-width: 48em){
        flex: 100%;
    }
`;

export const TextWrapper = styled.div`
    margin: 0 1rem;
`;

export const TopLine = styled.p`
    color: ${({ darkText }) => (darkText ? '#000000' : '#ffbb00')};
    padding: .5rem;
    text-transform: uppercase;
    line-height: 1.6;
`;

export const Heading = styled.h2`
    margin: 1.2rem auto;
    font-size: 3.8rem;
    line-height: 1.1;
    color: ${({lightText}) => (lightText? '#ffbb00': '#000000')};

    @media screen and (max-width: 30em){
        font-size: 3.2rem;
    }
`;

export const Subtitle = styled.p`
    margin: 1rem 0;
    font-size: 1.8rem;
    color: ${({darkText}) => (darkText? '#000000': '#ffffff')};
    text-align: justify;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 55.5rem;
    height: 100%;
`;

export const Img = styled.img`
    max-width: 100%;
    display: block;
    height: auto;
`;
