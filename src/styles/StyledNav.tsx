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
        list-style-type: none;
    }

    ul li {
        position: relative;
        display: inline-block;
    }

    ul li a {
        text-decoration: none;
        padding: 5px;
        color: ${theme.lightestColor};
        text-transform: uppercase;
    }

    ul li a:hover {
        color: ${theme.lightestColor};
    }

    ul li a::before {
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        background-color: ${theme.lightestColor};
        bottom: 0;
        width: 0%;
        transition: all ease-in-out 200ms;
    }

    ul li a:hover::before {
        width: 100%;
    }

    .active {
        color: ${theme.lightColor};
        font-weight: 700;
    }
`
export default StyledNav
