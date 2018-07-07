import React from 'react';

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      userGuess: null
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const num = this.numInput.value.trim();
    this.setState({userGuess: num})
    this.numInput.value = '';
  }

  render() {

  const numToGuess = this.props.ranNum; 
  const numGuessed = this.state.userGuess
  const difference = Math.abs(numGuessed - numToGuess)

  let feedback;

  if (this.state.userGuess == null) {
    feedback = 'Take your first guess'
  } else if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }


    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <div className="form-group">
          <div>Your guess: {numGuessed}</div>
          <label></label>
          <input type="number" ref={input => this.numInput = input} />
          <button>Go!</button>
          <div>{feedback}</div>
        </div>
      </form>
    );

  }

}