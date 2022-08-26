import { history } from 'umi';

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
    hasIdentified:false
  },
  effects: {
    *login({ payload: { username, password } }, { call, put }) {
      yield call(fakeLoginRequest, { username, password });
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
    signIn(state, { payload: { username, password } }) {
      return {
        ...state,
        hasSignedIn: true,
        username: '',
        password: '',
      };
    },
    signOut(state) {
      return {
        ...state,
        hasSignedIn: false,
      };
    },
  },
};
