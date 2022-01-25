// Styled Button Component
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    color: #FFF;
    background: #0077cc;
    border: none;
    border-radius: 5px;
    display: block;
    cursor: pointer;
    font-size: 18px;

    :hover {
        opacity: 0.8;
    }

    :active: {
        background: #005af3;
    }
`;

export default Button;