import React from 'react';
import { Link } from 'react-router-dom';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount (){
    this.props.resetErrors();
}

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Login to Pictr</h2>
        <form>
          <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
          </label>

          <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          </label>
          <button onClick={this.handleSubmit}>Log In</button>
          <p>New to Pictr?  <Link to="/signup">Sign up here</Link></p>
        </form>
      </div>
    );
  }
}

export default loginForm;