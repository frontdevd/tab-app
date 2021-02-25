import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import messageReducer from "./reducers/messageReducer";
import colorReducer from "./reducers/colorReducer";

const rootReducer = combineReducers({
    messageTab: messageReducer,
    colorTab: colorReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))