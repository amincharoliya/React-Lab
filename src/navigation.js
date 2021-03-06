import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ()=> {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todo">Todo App</Link>
                </li>
                <li>
                    <Link to="/users">User List</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav