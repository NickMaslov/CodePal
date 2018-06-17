const initialState = {
  loggedIn: false,
  user: {
    id: '',
    photoUrl: '',
    name: '',
    aboutMe: ' ',
    chats: ' ',
    geocode: ' ',
    images: [],
    notification: false,
    show: false,
    report: false,
    swipes: {

    },
    token: ' ',
  },
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.user, loggedIn: action.loggedIn };
    }
    default:
      return state;
  }
}
