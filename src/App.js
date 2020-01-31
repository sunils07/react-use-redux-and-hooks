import './App.css';
import React, { useReducer, useMemo } from 'react';

import { handleGetAppSettingsAction } from "./lib/redux/modules/app/app.actions";
import appReducer, { appDefaultState } from "./lib/redux/modules/app/app.reducer";

import RootDispatchContext from "./hooks/contexts/app/root-dispatch.ctx";
import RootStateContext from "./hooks/contexts/app/root-state.ctx";

import Header from "./Components/Header/Header.Index";
import MathComp from "./Components/Math/Math.Index";


function App(props) {
	const [state, dispatch] = useReducer(appReducer, appDefaultState);

	useMemo(() => {
	  handleGetAppSettingsAction(dispatch);
	}, []);

  return (
  	<RootDispatchContext.Provider value={dispatch}>
  		<RootStateContext.Provider value={state}>
  			<Header />
    		<MathComp />
		</RootStateContext.Provider>
    </RootDispatchContext.Provider>
  );
}

export default App;
