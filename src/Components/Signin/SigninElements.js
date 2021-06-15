import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #000;
    padding: 4rem;
    color: #fff;
    max-width: 144rem;
    min-height: 100vh;

    @media screen and (max-width: 48em){
        padding: 2rem;
    }
`;

export const FormWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    background: #000000;
    border-radius: 10px;
    color: #fff;

    @media screen and (max-width: 48em){
        padding: 1rem;
    }
`;

export const Icon = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 4rem;
    color: #ffbb00;
    padding: 1rem;
`;

export const FormContent = styled.div`
    padding: 1rem;
    width: 50%;
    margin: 2rem auto;
    max-width: 500px;
    min-width: 300px;

    @media screen and (max-width: 48em){
        width: 100%;
    }
`;

export const Form = styled.form`
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
    background: #ffbb00;
    border-radius: .5rem;
    color: #000;

    @media screen and (max-width: 48em){
        width: 100%;
    }
`;

export const FormH1 = styled.h1`
    padding: 2rem;
    text-align: center;
`;

export const FormLabel = styled.label`
    
`;

export const FormInput = styled.input`
    border: 1px solid #f7f7f7;
    background: #fff;
    color: #000;
    border-radius: 3px;
    display: block;
    height: 35px;
    width: 100%;
    margin: 0 0 2rem 0;
    outline: none;
    font-size: 1.4rem;
    
    &:focus{
        border-radius: 3px;
        outline: 1px solid #ccc;
    }
`;

export const FormButton = styled.button`
    display: block;    
    border: none;
    width: 100%;
    padding: 1.5rem;
    background: #000;
    color: #ffbb00;
    border-radius: 5px;
    margin: 3rem auto;
    cursor: pointer;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all .2s ease-in-out;

    &:active{
        transform: translateY(3px);
    }
`;

export const Text = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;