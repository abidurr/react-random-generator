import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import StyledNav from "../styles/StyledNav"
import Pictures from "./Pictures"
import Colors from "./Colors"
import Countries from "./Countries"
import Home from "./Home"

export default function Nav(): JSX.Element {
    return (
        <Router>
            <StyledNav>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pictures" activeClassName="active">
                                Pictures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/countries" activeClassName="active">
                                Countries
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/colors" activeClassName="active">
                                Colors
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </StyledNav>
            <Route exact path="/" component={Home} />
            <Route path="/pictures" component={Pictures} />
            <Route path="/colors" component={Colors} />
            <Route path="/countries" component={Countries} />
        </Router>
    )
}
