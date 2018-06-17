import React from 'react';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import * as firebase from 'firebase';
import { getCards } from '../redux/actions';
import Cards from '../components/Cards';
import NoCards from '../components/NoCards';

class Home extends React.Component {
  state = {
    cards: [
      {
        name: 'fran',
        image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif',
      },
      {
        name: 'jackie',
        image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif',
      },
      {
        name: 'phil',
        image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif',
      },
      {
        name: 'jacks',
        image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif',
      },
      {
        name: 'mellow',
        image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif',
      },
      {
        name: 'frank',
        image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif',
      },
      {
        name: 'timmmay',
        image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif',
      },
    ],
  };

  componentDidMount() {
    this.props.dispatch(getCards());
  }
  handleYup(card) {
    firebase
      .database()
      .ref('cards/' + this.props.user.id + '/swipes')
      .update({ [card.id]: true });
  }

  handleNope(card) {
    firebase
      .database()
      .ref('cards/' + this.props.user.id + '/swipes')
      .update({ [card.id]: false });
  }

  checkMatch(card) {
    firebase
      .database()
      .ref('cards/' + card.id + '/swipes/' + this.props.user.id)
      .once('value', snap => {
        if (snap.val() == true) {
          var me = {
            id: this.props.user.id,
            photoUrl: this.props.user.photoUrl,
            name: this.props.user.name,
          };
          var user = {
            id: card.id,
            photoUrl: card.photoUrl,
            name: card.name,
          };
          firebase
            .database()
            .ref('cards/' + this.props.user.id + '/chats/' + card.id)
            .set({ user: user });
          firebase
            .database()
            .ref('cards/' + card.id + '/chats/' + this.props.user.id)
            .set({ user: me });
        }
      });
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.cards}
        stack={false}
        renderCard={cardData => <Cards {...cardData} />}
        renderNoMoreCards={() => <NoCards />}
        showYup={false}
        showNope={false}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
        handleMaybe={this.handleMaybe}
        hasMaybeAction={false}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    cards: state.cards,
    user: state.user,
  };
}

export default connect(mapStateToProps)(Home);
