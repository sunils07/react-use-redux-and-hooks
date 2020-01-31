import React, { createContext, useRef, useContext, useReducer } from "react";
import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import { mathOperation } from "../../lib/redux/modules/math/math.actions";
import { handleAppThemeAction } from "../../lib/redux/modules/app/app.actions";
import mathReducer, { mathDefaultState } from "../../lib/redux/modules/math/math.reducer";

const StateContext = createContext();
const DispatchContext = createContext();

function MathComp(props) {
    const num1Input = useRef(null);
    const num2Input = useRef(null);
    const appRootDispatch = useContext(RootDispatchContext);
    const [state, dispatch] = useReducer(mathReducer, mathDefaultState);
    const {
        addition,
        substraction,
        division,
        multiflication
    } = state;

    function onSubmit() {
        const num1 = parseInt(num1Input.current.value);
        const num2 = parseInt(num2Input.current.value);

        handleAppThemeAction(appRootDispatch, {
            ...state.theme,
            textWhite: "white"
        });

        mathOperation(dispatch, num1, num2, "+");
        mathOperation(dispatch, num1, num2, "-");
        mathOperation(dispatch, num1, num2, "/");
        mathOperation(dispatch, num1, num2, "*");
    }

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <form>
                    <input ref={num1Input} type="number" />
                    <input ref={num2Input} type="number" />
                    <button
                        type="button"
                        onClick={onSubmit}
                    >
                        =
                    </button>
                </form>
                <p>Addition= {addition}</p>
                <p>substraction={substraction}</p>
                <p>Aivision={division}</p>
                <p>Multiflication={multiflication}</p>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

MathComp.propTypes = {};

export default MathComp;