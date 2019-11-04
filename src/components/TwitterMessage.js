import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  messageHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  remainingChars = () => {
    return this.props.maxChars - this.state.message.length;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={e => this.messageHandler(e)}
        />
        <p>test: {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
