import React, {Component } from 'react';
import  {NavLink} from 'react-router-dom';

export default function Nav (){
    return (
        <div>
        <nav className = 'nav'>
            <ul>
                <li>
                    <button className="navButton">
                    <NavLink to='/unansweredQuestions'  exact activeClassName = 'active' style={{color:'black'}}>
                       UNANSWERED QUESTIONS
                    </NavLink>
                    </button>
                </li>
                <li>
                    <button className="navButton">
                    <NavLink to= '/answeredQuestions' exact activeClassName = 'active' style={{color:'black'}}>
                        ANSWERED QUESTIONS
                        </NavLink>
                        </button>
                </li>
               
            </ul>
        </nav>
        </div>
    )
}
