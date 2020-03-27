import React from 'react';
import "./style.css";
const Nav = props => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>

                    </li>
                    <li>
                        SCore: {props.score} ||| TopScore: {props.topScore}
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};


export default Nav;