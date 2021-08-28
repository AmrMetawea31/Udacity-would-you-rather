import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Nav from './Nav'

class AnsweredQuestions extends Component {
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

    const answeredQuestions =[];
    const ques = Object.keys(questions).map((id=> questions[id])).sort((a,b) => b.timestamp - a.timestamp)

     Object.keys(ques).forEach((id)=>{
        const votedOption1 = ques[id].optionOne.votes.indexOf(authedUser)
        const votedOption2 = ques[id].optionTwo.votes.indexOf(authedUser)

   
        if(votedOption1 > -1 || votedOption2 > -1){
            answeredQuestions.push(ques[id].id)
       


        }
    })
    

        return{
            
            questionId: answeredQuestions,
            authedUser
           
        }
    }
    
    export default connect(mapStateToProps)(AnsweredQuestions);