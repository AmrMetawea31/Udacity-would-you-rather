import React , {Component} from 'react';
import { connect } from "react-redux";
import { withRouter} from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
    state = {
        selectedUser:null,
        toHome: false
    }
    handleLogin = (e) =>{
        e.preventDefault()
        const {dispatch}= this.props
        const authedUser = this.state.selectedUser;

       dispatch (setAuthedUser(authedUser))

       const from =
    this.props.location !== undefined && this.props.location.state !== undefined
      ? this.props.location.state.from
      : '/unansweredQuestions';
      this.props.history.push(from);

    }
    handleChange =(e) =>{
        e.preventDefault()
        this.setState(()=>({
            selectedUser:e.target.value
        }))
        
    }

    
    render(){
        
 
        return(
            <div>
                
            <div className='center' style={{fontSize:24,color:'black'}}>
                <h3 style={{color:'orangered'}}>Sign in to Would You Rather Game</h3>
                <h4>Select one user to log in</h4>
                <select style={{width:500, height:30}} onChange={this.handleChange}>
                    <option>Select user</option>
                {
                    this.props.userNames.map( (x,y) => 
                    <option key={y}>{x}</option> )
                }
                                
                </select>
                <div >
                <button className ="loginButton" onClick={this.handleLogin}>SIGN IN</button>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    
    const usersNames =[]
    Object.keys(users).forEach((user)=>{
        const userName=users[user].id;
        usersNames.push(userName);
 })

    return {
      userNames:usersNames,
      authedUser
    };
  
}
  export default withRouter(connect(mapStateToProps)(Login));