import React, { Component } from 'react';
import './style.scss';

class CardPile extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleRemoveCard(event) {
    event.preventDefault();
    this.props.onRemoveCard(this.state.value);
  }

  render() {
    return (
      <div className="CardPile">
        <span className="CardPileLabel">{this.props.label}</span>
        <form id="removeCardForm" onSubmit={this.handleRemoveCard}>
          <input type="number"
            value={this.state.value}
            className="removeCardInput"
            onChange={this.handleChange}
            min="1"/>
          <input type="submit" value={this.props.removeCardText} className="removeCardBtn" />
        </form>
        {this.props.children}
        <span className="CardPileCount">{this.props.cards.size}</span>
      </div>
    );
  }
}

export default CardPile;
