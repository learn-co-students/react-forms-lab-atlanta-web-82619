import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    // initial value of message is blank
    this.state = {
      message: '',
    };
  }


  // on the even of the data changing the state gets changed based on the value of the input and the maxchars props gets smaller as the message gets longer
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}


export default TwitterMessage;
