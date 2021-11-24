import React from 'react';
import { Link } from 'react-router-dom';

class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.login(user)
  }

  render() {
    return (
      <div className="session-form">
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit"/>
          <p>Already have an account?<Link to="/">Sign in here</Link></p>
        </form>
      </div>
    );
  }
}

export default CreateSessionForm;