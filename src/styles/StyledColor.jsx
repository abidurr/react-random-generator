import styled from "styled-components"

const StyledColor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-shadow: 1px 1px 1px #999999;
    background: ${props => props.color};
`

export default StyledColor