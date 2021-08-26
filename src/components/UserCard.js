import React , {Component} from 'react';
import { connect } from 'react-redux';

class UserCard extends Component {
    

    render(){
     const {user} = this.props;
        const {
            id,
              name,
              avatarURL,

          }= user.user
        return(
            <div className="question" >
            <img className="boardAvatar" src={avatarURL} alt={`Avatar of ${name}`} />
              <div >
              <div className = "boardName">
                  <span style={{color: 'black'}}>{name}</span>
                  </div>
                  <div className="boardInfo">
                  <p style={{color:'#808080'}}>Answered Questions:  {user.userAnswerScore}</p>
                  </div>
                  <div className="boardInfo">
                  <p style={{color:'#808080', marginTop:50}}>Created Questions:  {user.userQuestionScore}</p>
                  </div>
              </div>
              <div style={{
                  alignSelf:'center', 
                  position: 'absolute', 
                  right:500,
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderStyle: 'solid', 
                  backgroundColor: 'skyblue'
                  }}>
                  <p style={{margin:25, fontSize:24, fontWeight:'bold'}}>{user.totalScore}</p>
              </div>
              
              </div>
        )
    }
}

function mapStateToProps({users}, {user}) {
    
  
    return {
     users
  }
}

export default connect(mapStateToProps)(UserCard);