import {
    MATH_ADDITION,
    MATH_SUBTRACTION,
    MATH_MULTIPLICATION,
    MATH_DIVISION,
} from "./math.types";

export const mathOperations = {
    "+": function addition(num1, num2) {
        return {
            type: MATH_ADDITION,
            addition: (num1 + num2),
        }
    },
    "-": function substraction(num1, num2) {
        return {
            type: MATH_SUBTRACTION,
            substraction: (num1 - num2),
        }
    },
    "*": function multiflication(num1, num2) {
        return {
            type: MATH_MULTIPLICATION,
            multiflication: (num1 * num2),
        }
    },
    "/": function division(num1, num2) {
        return {
            type: MATH_DIVISION,
            division: (num1 / num2),
        }
    }
};

export function mathOperation(dispatch, num1, num2, operation) {
    return dispatch(mathOperations[operation](num1, num2));
}