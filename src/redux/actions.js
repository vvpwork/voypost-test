export const Type = {
  REQUEST: "REQUEST/allTrips",
  SUCCESS: "SUCCESS/allTrips",
  ERROR: "ERROR/allTrips",
  FILTER: "FILTER/tripsDashboard"
};

export const FILTER = filter => ({
  type: Type.FILTER,
  payload: filter
});

export const SUCCESS = allTrips => ({
  type: Type.SUCCESS,
  payload: allTrips
});

export const REQUEST = () => ({
  type: Type.REQUEST
});

export const ERROR = err => ({
  type: Type.ERROR,
  payload: err
});
