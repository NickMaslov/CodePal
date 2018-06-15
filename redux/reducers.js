const initialState = {
  loggedIn: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}
