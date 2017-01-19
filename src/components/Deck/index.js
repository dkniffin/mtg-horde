import React, { Component } from 'react';
import './style.css';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleDiscard(event) {
    console.log('Discarding ' + this.state.value + ' cards');
    event.preventDefault();
    this.props.onDiscard(this.state.value);
  }

  render() {
    return (
      <div className="deck">
        <span className="deckCount">{this.props.cards.size}</span>
        <form id="discardForm" onSubmit={this.handleDiscard}>
          <input type="number"
            value={this.state.value}
            className="discardInput"
            onChange={this.handleChange}
            min="1"/>
          <input type="submit" value="Discard" className="discardBtn" />
        </form>
      </div>
    );
  }
}

export default Deck;
