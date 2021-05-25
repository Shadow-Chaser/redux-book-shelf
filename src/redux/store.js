import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducers/bookReducer";

const combinedReducer = combineReducers({
    books: bookReducer,
    // user: userReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())