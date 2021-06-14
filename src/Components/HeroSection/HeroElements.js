import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    width: 100%;
    min-height: 66rem;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: center;
    // margin: 4rem auto;

    @media screen and (max-width: 48em){
        height: 100%;
    }
`;

export const HeroContent = styled.div`
    align-self: center;
    text-align: center;
    padding: 2rem;
    margin: 1rem auto;
`;

export const ArrowForward = styled(MdArrowForward)`
    vertical-align: middle;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    vertical-align: middle;
`;