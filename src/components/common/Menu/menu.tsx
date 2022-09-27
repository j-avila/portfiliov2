import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Badge } from "../../../assets/badge.svg"
import * as St from "./menu.styles"

const Menu = () => {
  return (
    <St.Menu>
      <Badge />
      <St.Nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          /
          <li>
            <Link to="/admin">admin</Link>
          </li>
          /
          <li>
            <Link to="/create">
              Create project
              <i className="fa-solid fa-plus" />
            </Link>
          </li>
        </ul>
      </St.Nav>
    </St.Menu>
  )
}

export default Menu
