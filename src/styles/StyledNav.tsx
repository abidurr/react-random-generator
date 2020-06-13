import styled from "styled-components"
import theme from "./theme"

const StyledNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5em;
    background-color: ${theme.darkestColor};
    color: ${theme.lightestColor};

    ul {
        justify-content: space-around;
    }

    ul li {
        list-style-type: none;
        display: inline-block;
    }

    ul li a {
        text-decoration: none;
        padding: 5px;
        color: ${theme.lightestColor};
    }

    ul li a:hover {
    }

    .active {
        color: ${theme.lightColor};
        font-weight: 700;
    }
`
export default StyledNav
