import styled from "styled-components"
import theme from "./theme"

const StyledButton = styled.button`
    background: transparent;
    padding: 1em;
    border-radius: 50%;
    box-shadow: 2px 2px 2px black;
    color: ${theme.lightestColor};
    cursor: pointer;
`
export default StyledButton