// actions/bookingActions.js
export const SET_NUM_PEOPLE = 'SET_NUM_PEOPLE';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_SELECTED_TIME = 'SET_SELECTED_TIME';

export const setNumPeople = (num) => ({
  type: SET_NUM_PEOPLE,
  payload: num,
});

export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});

export const setSelectedTime = (time) => ({
  type: SET_SELECTED_TIME,
  payload: time,
});
