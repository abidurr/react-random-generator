import React from "react"
import { Link } from "react-router-dom"
import StyledColor from "../styles/StyledColor"
import StyledButton from "../styles/StyledButton"

export default function Colors(): JSX.Element {
    const color = getRandomColor()
    return (
        <StyledColor color={color}>
            <h1>Colors</h1>
            <h3>You random color this time around is:</h3>
            <h3>{color}</h3>
            <Link to="#">
                <StyledButton>
                    Reload
                </StyledButton>
            </Link>
        </StyledColor>
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
