import React , {Component} from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        option1:'',
        option2:'',
        toHome: false
    }

    handleChangeOption1 = (e) =>{
        const option1= e.target.value
        
        this.setState(()=>({
            option1
        }))
    }

    handleChangeOption2 = (e) =>{
        const option2= e.target.value
        
        this.setState(()=>({
            option2
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const {option1, option2} = this.state
        const {dispatch, id} = this.props
        const author = this.props.authedUser
        dispatch(handleAddQuestion(option1, option2, author))


        this.setState(()=>({
            option1: '',
            option2: '',
            toHome: id? false: true
        }))
    }
    render(){
        const {option1, option2, toHome} = this.state

        if(toHome === true){
            return <Redirect to='/unansweredQuestions'/>
        }

        return(
            <div >
                
                <h2 style={{color:'red'}}>Create New Question</h2>
                <h3>Would you rather...</h3>
                <form onSubmit={this.handleSubmit}>
                <p>option 1</p>
                <textarea
                placeholder="Enter option 1"
                value={option1}
                onChange={this.handleChangeOption1}
                className='textarea'
                maxLength={280}
                />
                <hr />
                <p>option 2</p>
                <textarea
                placeholder="Enter option 2"
                value={option2}
                onChange={this.handleChangeOption2}
                className='textarea'
                maxLength={280}
                />

                <button className="addButton" type = 'submit' disabled={option1==='', option2===''}>ADD QUESTION</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps({ authedUser }) {
    
    return {
      authedUser
    };
  }
export default  connect(mapStateToProps)(NewQuestion);