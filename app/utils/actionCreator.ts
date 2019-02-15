
export function asyncActionCreator(type: string) {
	const constants = {
		TYPE: type,
		REQUEST: `${type}_REQUEST`,
		SUCCESS: `${type}_SUCCESS`,
		FAILURE: `${type}_FAILURE`,
	};
	return {
		...constants,
		creator: (props?: any) => ({ type, payload: {...props} }),
		request: (props?: any) => ({ type: constants.REQUEST, payload: {...props } }),
		success: (props?: any) => ({ type: constants.SUCCESS, payload: {...props } }),
		failure: (props?: any) => ({ type: constants.FAILURE, payload: {...props } }),
		map: (dispatch: Function, payload: object) => dispatch({ type, payload: {...payload } }),
	};
}

export function doAsyncAction(func: Function, prefix: string) {
	return (args: any) =>
		async (dispatch: Function) => {
			dispatch({ type: `${prefix}_REQUEST`, args });
			try {
				const data = await func(args);
				return dispatch({ type: `${prefix}_SUCCESS`, payload: data });
			} catch (error) {
				return dispatch({ type: `${prefix}_FAILURE`, payload: error });
			}
		};
}
    