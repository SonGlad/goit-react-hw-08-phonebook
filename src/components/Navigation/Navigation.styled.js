import { styled } from "styled-components";


export const NavigationStyles = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none;
        padding: 10px;
        font-weight: 600;
        color: #e6e6e6;
        font-size: 18px;
        letter-spacing: 1px;
        transition: color 0.25s;

        &:hover, &:focus {
        color: #f21331;
        }
    }

    .link.active {
        color: #f21331;
    }
`