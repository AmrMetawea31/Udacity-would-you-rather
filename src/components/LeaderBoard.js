import React , {Component} from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import UserCard from './UserCard';

class LeaderBoard extends Component {
    handleSubmit = (e) => {
      this.props.history.push(`/leaderBoard`)
        e.preventDefault();
      
      };

    render(){
             
        return(
            <div>
 <ul className ='center'>
         {this.props.scores.map((user)=>(
             <li key = {user}>
              <UserCard user={user} />
             </li>
         ))}
     </ul>        </div>
        

        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    const scores = calculateScore(users)
    return {
        scores:scores
    }

    };
  const calculateScore=(users)=>{
      const score=[]
     Object.keys(users).forEach((user)=>{
            const userName=user;
            const userQuestionScore=users[user].questions.length
            const userAnswerScore = Object.keys(users[user].answers).length
            const totalScore = userAnswerScore+userQuestionScore
            score.push({user:{name:userName,
                avatarURL:users[user].avatarURL,
                id:users[user].id
            },userQuestionScore, userAnswerScore, totalScore});
     })
     score.sort((a, b) => (b.totalScore > a.totalScore) ? 1 : -1)
     return score;
  }
  export default withRouter(connect(mapStateToProps)(LeaderBoard));