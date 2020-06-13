import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5em;
    background-color: darkgray;

    ul {
        justify-content: space-around;
    }

    ul li {
        list-style-type: none;
        display: inline-block;
    }

    ul li a {
        text-decoration: none;
        color: white;
        padding: 5px;
    }

    .active {
        color: black;
    }
`
export default StyledNav
