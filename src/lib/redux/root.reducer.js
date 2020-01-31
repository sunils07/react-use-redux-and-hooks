import combineReducer from "./combine.reducers";

import useMathReducer from "./modules/math/math.reducer";

export default combineReducer({
    useMathReducer: useMathReducer
});