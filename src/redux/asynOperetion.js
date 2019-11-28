import { ERROR, REQUEST, SUCCESS } from "./actions";
import { getAllTrips } from "../helper/axios";

export const allTrips = () => dispatch => {
  dispatch(REQUEST());
  getAllTrips()
    .then(({ data }) => dispatch(SUCCESS(data)))
    .catch(err => {
      dispatch(ERROR(err));
    });
};
