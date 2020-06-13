import styled from "styled-components"
import theme from "./theme"

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-shadow: 2px 2px 2px #333333;
    background: ${props => props.color ? props.color : theme.darkColor};
    position: absolute;
    height: 100%;
    top: 0;
    z-index: -1;
    width: 100%;
    color: ${theme.lightestColor};
`

export default StyledBody