import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Redirect, Route, Switch  } from "react-router-dom";
import Nav from './Nav';
import UnansweredQuestions from './UnansweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
import NewQuestion from './NewQuestion';
import QuestionDetails from './QuestionDetails';
import LeaderBoard from './LeaderBoard';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import PageNotFound from './PageNotFound';
import PrivateRoute from './PrivateRoute';

class App extends Component{
  componentDidMount() {
    const { dispatch, authedUser } = this.props;
    dispatch(handleInitialData());
  }
  
  render(){
   const {authedUser, questions} = this.props

    return(
      <div>
    

      <Router >
      {authedUser !== null && (
       <div>
        <Header  />
          <hr/>
        <LoadingBar />
        </div>
        )}
      
  <div className='container'>
    <Switch >
    <Route exact path = '/login' component={Login} />
    <Redirect exact from="/" to="/login" />
    <PrivateRoute isAuthenticated={authedUser !== null} exact path='/unansweredQuestions'  component = {UnansweredQuestions}/>
    <PrivateRoute isAuthenticated={authedUser !== null} exact path='/answeredQuestions'  component = {AnsweredQuestions}/> 
    <PrivateRoute isAuthenticated={authedUser !== null} exact path='/questionDetails/:id' component = {props => {
          const { id } = props.match.params
          if(questions[id] !== undefined){
          return <QuestionDetails questionId={id}/>
          }else{
            return  <Redirect to = {{pathname:'/PageNotFound', state:{authedUser} }} />
          }
      }  
      }
    /> 
    <PrivateRoute isAuthenticated={authedUser !== null} exact path = '/add' component= {NewQuestion} />
    <PrivateRoute isAuthenticated={authedUser !== null} exact path='/leaderBoard'  component = {LeaderBoard} />
    <Route component={PageNotFound}/>
  </Switch>
        </div>
      <hr />
      <Footer />
    </Router>

    </div>
    
    )
      
  }
}

function mapStateToProps({ authedUser,questions }) {
  return {
    authedUser,
     loading: authedUser === null,
     questions
  };
}
export default connect(mapStateToProps)(App);