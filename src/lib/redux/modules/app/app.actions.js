import { APP_THEME, APP_SETTINGS_TYPE } from "./app.types";
import axios from "axios";

export function changeThemeAction(theme) {
	return {
		type: APP_THEME,
		theme
	};
}

export function appSettingsAction(settings) {
	return {
		type: APP_SETTINGS_TYPE,
		settings
	};
}


export function handleAppThemeAction(dispatchFn, newTheme) {
	// Here you can cal api and dispatch action
	return dispatchFn(changeThemeAction(newTheme))
}

export function handleGetAppSettingsAction(dispatchFn) {
	return axios({
	  method: 'get',
	  url: 'https://my-json-server.typicode.com/typicode/demo/posts',
	})
	.then(function (response) {
		dispatchFn(appSettingsAction(response.data));
	    return response.data;
	  })
	  .catch(function (error) {
	    dispatchFn(appSettingsAction(error));
	    return error;
	  });
}