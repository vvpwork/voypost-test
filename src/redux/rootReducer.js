import { combineReducers } from "redux";
import { Type as T } from "./actions";

const allTrips = (state = [{}], { type, payload }) => {
  switch (type) {
    case T.SUCCESS:
      return payload;
    default:
      return state;
  }
};

const Error = (state = "", { type, payload }) => {
  switch (type) {
    case T.ERROR:
      return payload;
    default:
      return state;
  }
};

const filter = (state = {}, { type, payload }) => {
  switch (type) {
    case T.FILTER:
      return payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  allTrips,
  Error,
  filter
});
