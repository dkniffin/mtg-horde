import React, { Component } from 'react';
import './style.css';

class Graveyard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleExile = this.handleExile.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleExile(event) {
    console.log('Exilinging ' + this.state.value + ' cards');
    event.preventDefault();
    this.props.onExile(this.state.value);
  }

  render() {
    return (
      <div className="Graveyard">
        <span className="GraveyardCount">{this.props.cards.size}</span>
        <form id="exileForm" onSubmit={this.handleExile}>
          <input type="number"
            value={this.state.value}
            className="exileInput"
            onChange={this.handleChange}
            min="1"/>
          <input type="submit" value="Exile" className="exileBtn" />
        </form>
      </div>
    );
  }
}

export default Graveyard;
