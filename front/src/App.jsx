import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault(); // Prevents the form from refreshing on submit

    const registered = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((res) => console.log(res.data));

    // Normally is refresh the page window.location()
    this.setState({ userName: "", email: "", password: "" });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                onChange={this.changeName}
                value={this.state.userName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
