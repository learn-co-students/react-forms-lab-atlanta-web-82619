import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  inputter = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitter = (e) => {
    e.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitter}>
        <div>
          <label>
            Username
            <input onChange={this.inputter} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.inputter} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
