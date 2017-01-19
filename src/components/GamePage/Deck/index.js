import React, { Component } from 'react';
import './style.css';

import { discardCards } from "../../../actions/deckActions";

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
    discardCards(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="deck">
        <span className="deckCount">{this.props.cards}</span>
        <form onSubmit={this.handleDiscard}>
          <input type="number" value={this.state.value} onChange={this.handleChange} min="1" max="100"/>
          <input type="submit" value="Discard" className="discardBtn" />
        </form>
      </div>
    );
  }
}

export default Deck;
