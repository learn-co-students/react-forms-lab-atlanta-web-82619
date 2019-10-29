import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input  onChange={event => this.onInputChange(event)} type="text" name="message" id="message" value ={this.state.message} />
        <p>Characters Remaining:{this.remainingCharacters()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
