function fakeLoginRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
}

export default {
  namespace: 'user',
  state: {
    hasSignedIn: false,
    username: '',
    password: '',
  },
  effects: {
    *login({payload: {username, password}}, {call, put}) {
      yield call(fakeLoginRequest, {username, password});
      yield put({
        type: 'signIn',
        payload: {
          username,
          password,
        },
      });
    },
  },
  reducers: {
    signIn(state, {payload: {username, password}}) {
      state.hasSignedIn = true;
        state.username = '';
        state.password = '';
    },
    signOut(state) {
      state.hasSignedIn = false;
    },
  },
};
