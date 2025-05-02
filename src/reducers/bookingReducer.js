// reducers/bookingReducer.js
import { SET_NUM_PEOPLE, SET_SELECTED_DATE, SET_SELECTED_TIME } from '../actions/bookingActions';

const initialState = {
  numPeople: 1,
  selectedDate: '',
  selectedTime: '',
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUM_PEOPLE:
      return { ...state, numPeople: action.payload };
    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case SET_SELECTED_TIME:
      return { ...state, selectedTime: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;
