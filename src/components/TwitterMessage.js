import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      chars: 0
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
      chars: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p onChange={event => this.handleMessageChange(event)}>Characters remaining: {this.props.maxChars - this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
