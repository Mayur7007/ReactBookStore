import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Book Manager</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Books List
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="" exact>
                    Add Book
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
