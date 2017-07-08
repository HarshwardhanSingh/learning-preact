export const userFetchingStart = () => ({
  type: 'FETCH_USER',
});

export const userFetchingSuccess = (data) => ({
  type: 'FETCH_USER_SUCCESS',
  data,
});

export const userFetchingFailed = () => ({
  type: 'FETCH_USER_ERROR',
});

export const fetchUserAction = (username) => (dispatch) => {
  dispatch(userFetchingStart)

  dispatch(userFetchingSuccess(username))
}