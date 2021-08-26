import { showLoading, hideLoading } from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION ='ADD_QUESTION';
export const ANSWER_QUESTION ='ANSWER_QUESTION';

function answerQuestion(questionId,author,option){
    return{type:ANSWER_QUESTION,questionId,author,option}
}
function addQuestion (question, option1, option2){
    question.optionOne.text = option1;
    question.optionTwo.text = option2;
    return{
        type: ADD_QUESTION,
        question,
    }
}
export function handleAnswerQuestion(data){
    return (dispatch, getState) =>{
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser:data.author,
            qid:data.questionId,
            answer: data.answer,
            
        }).then((question)=>dispatch(answerQuestion(data.questionId,data.author,data.answer)))
        .then(()=>dispatch(hideLoading()))
        
    }
}
export function handleAddQuestion (option1, option2,author){
    
    return (dispatch, getState) =>{
        const {authedUser} = getState()
                
        dispatch(showLoading())

        return saveQuestion({
            option1,
           option2,
            author
            
        }).then((question)=>dispatch(addQuestion(question,option1, option2)))
        .then(()=>dispatch(hideLoading()))
        
    }
}

export function receiveQuestions (questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}