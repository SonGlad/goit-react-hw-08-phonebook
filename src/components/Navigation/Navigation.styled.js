import { styled } from "styled-components";


export const NavigationStyles = styled.nav`
    .link {
        display: inline-block;
        text-decoration: none;
        padding: 12px;
        font-weight: 700;
        color: #2a363b;
    }

    .link.active {
        color: #e84a5f;
    }
`