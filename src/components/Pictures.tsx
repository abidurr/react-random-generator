import React from "react"
import { Link } from "react-router-dom"
import StyledButton from "../styles/StyledButton"
import StyledImage from "../styles/StyledImage"

export default function Pictures(): JSX.Element {
    return (
        <div>
            <h1>Pictures</h1>
            <StyledImage/>
            <Link to="#">
                <StyledButton>Reload</StyledButton>
            </Link>
        </div>
    )
}
