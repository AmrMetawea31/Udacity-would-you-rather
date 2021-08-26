import React , {Component} from 'react';
import { connect } from 'react-redux';

class AnswerQuestion extends  Component {
    render(){
        

        return(
            <div>
                Answer Selected Question
            </div>
        )
    }
}

function mapStateToProps({ users, question, authedUser } ) {
   

    return{
        question,
        authedUser
    }
}
export default connect(mapStateToProps)(AnswerQuestion);