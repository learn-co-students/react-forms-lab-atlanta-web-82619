import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      chars: 0,
      message: ""
    };
  }

  inputter = (e) => {
    this.setState({
      message: e.target.value,
      chars: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.inputter} type="text" name="message" id="message" value={this.state.message}/>
        <strong>({this.props.maxChars - this.state.chars})</strong>
      </div>
    );
  }
}

export default TwitterMessage;
