import React from "react"
import { Link } from "react-router-dom"
import StyledBody from "../styles/StyledBody"
import StyledButton from "../styles/StyledButton"

export default function Colors(): JSX.Element {
    const color = getRandomColor()
    return (
        <StyledBody color={color}>
            <h1>Colors</h1>
            <p>Your random color this time around was given by the hex code:</p>
            <h3>{color}</h3>
            <Link to="#">
                <StyledButton>
                    Reload
                </StyledButton>
            </Link>
        </StyledBody>
    )
}

function getRandomColor(): string {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
