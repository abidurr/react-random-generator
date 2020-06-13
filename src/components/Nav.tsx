import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import StyledNav from "../styles/StyledNav"
import Pictures from "./Pictures"
import Colors from "./Colors"
import Countries from "./Countries"

export default function Nav(): JSX.Element {
    return (
        <Router>
            <StyledNav>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pictures">Pictures</Link>
                        </li>
                        <li>
                            <Link to="/countries">Countries</Link>
                        </li>
                        <li>
                            <Link to="/colors">Colors</Link>
                        </li>
                    </ul>
                </nav>
                    <Route exact path="/pictures" component={Pictures} />
                    <Route exact path="/colors" component={Colors} />
                    <Route exact path="/countries" component={Countries} />
            </StyledNav>
        </Router>
    )
}
