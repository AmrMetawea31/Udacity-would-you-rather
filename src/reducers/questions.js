import {ANSWER_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions';
import { ADD_QUESTION } from '../actions/questions';

export default function questions (state = {}, action){

    switch (action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            const { question } = action;
            return{
                ...state,
                [question.id]: question
            }
            case ANSWER_QUESTION:
                const questions = {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        [action.option]: {
                            ...state[action.questionId][action.option],
                            votes: state[action.questionId][action.option].votes.concat(action.author)
                        }
                    }
                }
                return questions
        
        default:
            return state
    }
}