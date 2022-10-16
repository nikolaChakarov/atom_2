import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const init = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    isLoading: false,
    error: false,
    register: (user) => {},
    login: (user) => {},
};

const path = "http://localhost:5005/api/users";

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    const register = async (user) => {
        dispatch({
            type: "LOADING",
        });

        try {
            const dbResponse = await (
                await fetch(`${path}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
            ).json();

            if (!dbResponse.status) {
                dispatch({
                    type: "ERROR",
                    payload: dbResponse.message,
                });
                return;
            }

            dispatch({
                type: "REGISTER",
                payload: { token: dbResponse.token, usename: user.username },
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: "ERROR",
                payload: err.message ?? "SERVER ERROR",
            });
        }
    };

    const login = async (user) => {
        dispatch({
            type: "LOADING",
        });

        try {
            const dbResponse = await (
                await fetch(`${path}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
            ).json();

            if (!dbResponse.status) {
                dispatch({
                    type: "ERROR",
                    payload: dbResponse.message,
                });
                return dbResponse.status;
            }

            dispatch({
                type: "LOGIN",
                payload: { token: dbResponse.token, usename: user.username },
            });
            return dbResponse.status;
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.message ?? "SERVER ERROR",
            });
            return false;
        }
    };

    useEffect(() => {
        if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
        }
    }, [state.user]);

    return (
        <GlobalContext.Provider
            value={{
                user: state.user,
                error: state.error,
                isLoading: state.isLoading,
                register,
                login,
                dispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
