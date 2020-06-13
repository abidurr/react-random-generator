import styled from "styled-components"
import theme from "./theme"

const StyledFooter = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5em;
    background-color: ${theme.darkestColor};
    bottom: 0;
    position: absolute;
    color: ${theme.lightestColor};

    a {
        text-decoration: none;
        color: ${theme.lightColor};
    }
`

export default StyledFooter
