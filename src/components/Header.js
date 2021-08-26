import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { setAuthedUser } from '../actions/authedUser';
import logo from '../logo.png';
import { connect } from "react-redux";

class Header extends Component{
  render(){
  const{users}=this.props
  return (
    <div style={{flexDirection:'row'}}>
    <img  src={logo} width="80" height="80" style={{margin:5}}/>
    <img className="avatarHeader2" src={users.avatarURL} style={{marginLeft:'1550px' }}/>
    <p style={{marginLeft:'1600px' ,fontSize:18, fontWeight:'bold'}}>{users.name}</p>
    <nav style={{marginLeft:'1100px',}}>
      <NavLink  activeClassName="active" to="/unansweredQuestions" style={{ margin:30, fontSize:18}}>
        Dashboard
      </NavLink>
      <NavLink activeClassName="active" to="/add" style={{ margin:30, fontSize:18}}>
        New Question
      </NavLink>
      <NavLink activeClassName="active" to="/leaderBoard" style={{ margin:30, fontSize:18}}>
        Leader Board
      </NavLink>
      <NavLink activeClassName="active" to="/" style={{ margin:30, fontSize:18, color:'rosybrown'}} >
        <button onClick={setAuthedUser(null)}>
        LogOut
        </button>
      </NavLink>

    </nav>
    
    </div>
  );
  }
}


function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users:users[authedUser]
    
  };
}
export default connect(mapStateToProps)(Header);