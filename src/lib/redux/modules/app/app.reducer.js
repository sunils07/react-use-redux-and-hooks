import { APP_THEME, APP_SETTINGS_TYPE } from "./app.types";

export const appDefaultState = {
	theme: {
		isDarkMode: false,
		textWhite: "#fff",
		textBlack: "#000",
		headerBlackBGColor: "red",
		headerBlackTextColor: "white",
	},
	settings: []
};

export default function appReducer(state = appDefaultState, action) {
	switch(action.type) {
		case APP_THEME:
			return {
				...state,
				theme: {
					...state.theme,
					...action.theme,
				}
			};
		case APP_SETTINGS_TYPE: 
			return {
			...state,
			settings: [...state.settings, ...action.settings]
			};
	
		default:
			return state
	}
}	