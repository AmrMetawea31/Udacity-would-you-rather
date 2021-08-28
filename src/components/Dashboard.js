import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
    render(){
        return(
            
            <div>
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

function mapStateToProps({questions}){
    return{
        questionId:  Object.keys(questions).map((id=> questions[id])).sort((a,b) => b.timestamp - a.timestamp)
    }
}


export default connect(mapStateToProps)(Dashboard);