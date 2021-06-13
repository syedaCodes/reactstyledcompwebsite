import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';

export const Button = styled(LinkS)`
    color: ${({ primary }) => (primary? '#ffffff': '#000000')};
    padding: 1rem;
    border-bottom: 2px solid #ffbb00;
    outline: none;
    margin: 1rem auto;
    cursor: pointer;
    font-size: 1.6rem;
    transition: all .2s ease-in-out;
    display: inline-block;

    &:hover{
        background: #ffbb00;
        color: #000000;
        border-bottom: 2px solid #000000;
    }

    &:active{
        transform: translateY(3px);
    }
`;