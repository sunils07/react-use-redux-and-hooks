import {
    MATH_ADDITION,
    MATH_DIVISION,
    MATH_MULTIPLICATION,
    MATH_SUBTRACTION
} from "./math.types";

export const mathDefaultState = {
    addition: 0,
    substraction: 0,
    division: 0,
    multiflication: 0,
};



export default function mathReducer(state = mathDefaultState, action) {
    switch (action.type) {
        case MATH_ADDITION:
            return {
                ...state,
                addition: action.addition
            };
        case MATH_DIVISION:
            return {
                ...state,
                division: action.division
            };
        case MATH_MULTIPLICATION:
            return {
                ...state,
                multiflication: action.multiflication
            };
        case MATH_SUBTRACTION:
            return {
                ...state,
                substraction: action.substraction
            };
        default:
            return state;
    }
}