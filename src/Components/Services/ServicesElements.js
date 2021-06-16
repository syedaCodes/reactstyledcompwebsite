import styled from 'styled-components';

export const ServicesContainer = styled.div`
    padding: 6rem 4rem;
    margin: 2rem auto;
`;

export const ServicesH1 = styled.h1`
    text-align: center;
    margin: 1rem auto;
    padding: 2rem;
    font-size: 2.5rem;
    color: #000000;
`;

export const ServicesWrapper = styled.div`
    padding: 2rem 4rem;
    margin: 2rem auto;
    min-height: 45rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 48em){
        flex-direction: column;
        align-items: center;
    }
`;

export const ServiceCard = styled.div`
    padding: 2rem;
    max-height: 40rem;
    min-width: 30rem;
    margin: 0 1.5rem;
    border: 1px solid #e7e7e7;
    background: linear-gradient(157deg, #e7e7e7 0% 40%, #ffbb00 75% 100%);
    border-radius: .5rem;
    transition: all .2s ease-in-out;
    cursor: pointer;
    text-align: center;
    
    &:hover{
        transform: scale(1.02);
        box-shadow: 5px -5px 10px rgba(0, 0, 0, .3);
    }

    @media screen and (max-width: 48em){
        min-width: 20rem;
        width: 100%;
        margin: 1rem auto;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1.7rem;
    margin: 1rem auto;
`;

export const ServicesIcon = styled.img`
    height: 16rem;
    width: 16rem;
    margin: 1rem auto;
`;
export const ServicesP = styled.p`
    text-align: center;
`;
