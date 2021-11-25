import React from 'react';
import { Link } from 'react-router-dom';

class signupForm extends React.Component {
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="session-form">
        <p>Create Account</p>
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
          <button onClick={this.handleSubmit}>Sign Up</button>
          <p>Already have an account?<Link to="/">Sign in here</Link></p>
        </form>
      </div>
    );
  }
}

export default signupForm;