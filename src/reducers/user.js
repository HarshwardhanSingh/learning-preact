const initialState = {
  inFlight: true,
  inError: false,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, {
        inFlight: true,
        data: null,
      });
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {
        inFlight: false,
        data: action.data,
      });
    case 'FETCH_USER_ERROR':
      return Object.assign({}, state, {
        inFlight: false,
        inError: true,
        data: null,
      });
    default:
      return state;
  }
}