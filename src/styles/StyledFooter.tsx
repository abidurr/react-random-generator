import styled from "styled-components"

const StyledFooter = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5em;
    background-color: darkgray;
    bottom: 0;
    position: absolute;

    a {
        text-decoration: none;
        color: black;
    }
`
export default StyledFooter
