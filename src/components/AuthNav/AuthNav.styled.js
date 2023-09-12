import { styled } from "styled-components";


export const AuthNavStyles = styled.div`
    .link {
        display: inline-block;
        text-decoration: none;
        padding: 12px;
        font-weight: 600;
        color: #e6e6e6;
        font-size: 18px;
        letter-spacing: 1px;
        transition: color 0.25s;

        &:hover, &:focus {
        color: #9BB537;
        }
    }

    .link.active {
        color: #9BB537;
    }
`
