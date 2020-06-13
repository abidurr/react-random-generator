import styled from "styled-components"

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-shadow: 1px 1px 1px #999999;
    background: ${props => props.color};
    position: absolute;
    height: 100%;
    top: 0;
    z-index: -1;
    width: 100%;
`

export default StyledBody