import React , {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Nav from './Nav'
class UnansweredQuestions extends Component {
    
    render(){

        return(
            
            <div>
                <Nav />
                 <ul className ='center'>
                {this.props.questionId.map((id)=>(
                    <li key = {id}>
                        <Question id= {id}/>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}){
const unansweredQuestions =[];

 Object.keys(questions).forEach((questionId)=>{
    const votedOption1 = questions[questionId].optionOne.votes.indexOf(authedUser)
    const votedOption2 = questions[questionId].optionTwo.votes.indexOf(authedUser)
 
    if(votedOption1 === -1 && votedOption2 === -1){
        unansweredQuestions.push(questionId)
    }
})

    return{
        
        questionId: unansweredQuestions,
        authedUser
    }
}

export default connect(mapStateToProps)(UnansweredQuestions);