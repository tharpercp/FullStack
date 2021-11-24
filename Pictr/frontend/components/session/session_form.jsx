import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Login to Pictr</h2>
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
          <p>New to Pictr?  <Link to="/signup">Sign up here</Link></p>
        </form>
      </div>
    );
  }
}

export default SessionForm;