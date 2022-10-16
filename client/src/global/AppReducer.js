const AppReducer = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: false,
            };
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isLoading: false,
                error: false,
            };
        default:
            return state;
    }
};

export default AppReducer;
