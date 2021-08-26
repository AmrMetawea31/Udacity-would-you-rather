import React , {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";

import { handleAnswerQuestion } from '../actions/questions';

class QuestionDetails extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
      };
      answerQuestion=(e)=>{
        const {dispatch,authedUser,question} = this.props
        dispatch(handleAnswerQuestion({author:authedUser,questionId:question.id,answer:e}))
        this.props.history.push(`/unansweredQuestions`)
    }

    render(){
        const {question,authedUser} = this.props;
     
   
        const isQuestionAnsweredBefore=(question,authedUser)=>{
            const optionOneVotes=question.optionOne.votes;
            const optionTwoVotes=question.optionTwo.votes;
            if(optionOneVotes.indexOf(authedUser)>-1 || optionTwoVotes.indexOf(authedUser)>-1){
             
                return true;
            }
            return false;
        }
        

        return(
       <div>
        <p className = "question-header">{question.author} asks </p>
        <p style={{color:'black', marginTop:20, marginBottom:20}} className = "question-header">  Would you rather.......</p>
                  <input 
                  type="radio" 
                  value={question.optionOne.text} 
                  name="optionOne" 
                  disabled={isQuestionAnsweredBefore(question,authedUser)}
                  onClick={() => {this.answerQuestion('optionOne')}}
                  /> {question.optionOne.text}
                  <p>
                  {((question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length)))* 100} 
                  % -- {"        "}
                    {question.optionOne.votes.length}
                     Out of {" " }
                      {question.optionOne.votes.length + question.optionTwo.votes.length } 
                      {" " }Votes
                     </p>
                  <hr/>
                 <input 
                 type="radio"
                 value={question.optionTwo.text} 
                 name="optionTwo"
                 disabled={isQuestionAnsweredBefore(question,authedUser)} 
                 onClick={() => {this.answerQuestion('optionTwo')}}
                 /> {question.optionTwo.text}
               <p>
                  {((question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length)))* 100} 
                  % -- {"        "}
                    {question.optionTwo.votes.length}
                     Out of {" " }
                      {question.optionOne.votes.length + question.optionTwo.votes.length } 
                      {" " }Votes
                     </p>
              
       </div>
            

        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props ) {
const {questionId}=props;
  const question=questions[questionId]
    return {
        question,
      authedUser,
      users
    
  }
}
  export default withRouter(connect(mapStateToProps)(QuestionDetails));