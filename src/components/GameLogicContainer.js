import * as React from 'react';
import { connect } from 'react-redux';
import GameLogic from './GameLogic';
import MakeGuessFormContainer from './MakeGuessFormContainer';
import NewGameButton from './NewGameButton';
import { makeGuess } from '../actions/game';
import { newGame } from '../actions/game';

class GameLogicContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame()
 }

  render() {
    return(
      <div>
        <GameLogic word={ this.props.game.word} guesses={this.props.game.guesses} />
        <MakeGuessFormContainer guesses={ this.props.game.guesses } />
        <br/><br/><br/>
        <NewGameButton word={ this.props.game.word} guesses={this.props.game.guesses}/>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    game:state.game
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameLogicContainer)
