import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

export const store = createStore(rootReducer, enhancer);
