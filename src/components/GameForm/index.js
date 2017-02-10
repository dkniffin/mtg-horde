import React from 'react';
import './style.scss';

import { hashHistory } from 'react-router';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: 4,
      deck: 'zombie-200',
      graveyardTokens: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
    hashHistory.push('/game');
  }

  render() {
    return (
      <div className="GameForm">
        <div className="outer-box">
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td className="label">
                    <label htmlFor="players"># of Players (Max 6):</label>
                  </td>
                  <td className="input">
                    <input id="players" name="players" type="number" min="1" max="6" value={this.state.players} onChange={this.handleInputChange} />
                  </td>
                </tr>
                <tr>
                  <td className="label">
                    <label htmlFor="deck">Deck:</label>
                  </td>
                  <td className="input">
                    <select id="deck" name="deck" value={this.state.deck} onChange={this.handleInputChange} >
                      <option value="zombie-200">Zombies - 200</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="label">
                    <label htmlFor="graveyardTokens">Destroyed tokens go to graveyard</label>
                  </td>
                  <td className="input">
                    <input id="graveyardTokens" name="graveyardTokens" type="checkbox" value={this.state.graveyardTokens} onChange={this.handleInputChange} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input className="submit" type="submit" value="Play!"/>
          </form>
        </div>
      </div>
    );
  }
}

export default GameForm;
