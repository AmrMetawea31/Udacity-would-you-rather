import React , {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {formatQuestion} from '../utils/helper';
import AnswerQuestion from './AnswerQuestion';

class Question extends Component {
    handleSubmit = (e) => {
      this.props.history.push(`/questionDetails/${this.props.question.id  }`)
      
      };

    render(){
        const {
          id,
            name,
            timestamp,
            avatar,
            optionOne,
            optionTwo
        }= this.props.question

        return(
            <div className="question" >
          <img className="avatar" src={avatar} alt={`Avatar of ${name}`} />
            <div>
            <div className = "question-header">
                <span style={{color: 'black'}}>{name}</span>
                <span style={{marginLeft: 5, color:'red'}}>  asks Would you rather</span>
                </div>
                <div className="question-info">
                <p style={{color:'#808080'}}>{optionOne.text}</p>
                <div style={{color:'black'}}>
                <hr/>
                </div>
                <p style={{color:'#808080'}}>{optionTwo.text}</p>
            </div>
            <div>
            <button className="button" onClick={this.handleSubmit} >VIEW QUESTION</button>
            </div>
            </div>
            
            </div>
            

        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    const question = questions[id];
    
    return {
      authedUser,
       users,
      question:question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
    };
  }
  export default withRouter(connect(mapStateToProps)(Question));