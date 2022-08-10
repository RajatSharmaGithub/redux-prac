import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { formReducer, userDataReducer } from "./Reducer/TextformReducer";

const initialState = {

};

const reducer = combineReducers({
   
    userData: userDataReducer,
});

const composDevTools = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducer,
    initialState,
    composDevTools(applyMiddleware(thunk))
);

export default store;
