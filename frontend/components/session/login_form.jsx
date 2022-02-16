import React from 'react';
import { Link } from 'react-router-dom';
import Background from './background'
import EmptyNav from '../nav/empty_nav'

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount (){
    this.props.resetErrors();
}

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({
      username: 'tyler',
      password: 'password',
    });
  }

  renderErrors() {
    const errors = Object.values(this.props.errors);
    if (errors.length > 0) {
      return(
        <ul>
          {errors.map((error, i) => (
            <li key={i}>
              <p className="error">{error}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return null; 
    }
  }



  render() {
    return (
      <div>
        <EmptyNav />
        <div className="background-div">
          <Background />
        </div>
        <div className="session-form">
          <img className="logo" src="https://i.ibb.co/ZR9RYhr/Logo-whitebg.jpg"/>
          <form className="login-form">
            <div className="login-text">Log in</div>
            <label htmlFor="username" className="session-label">Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              htmlFor="username"
            />
            <label htmlFor="password" className="session-label">Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              htmlFor="password"
            />
            <button className="session-button" onClick={this.handleSubmit}><span className="button-text">Sign in</span></button>
            <button className="session-button" onClick={this.demoLogin}><span className="button-text">Demo</span></button>
            <div className="errors-container">{this.renderErrors()}</div>
            <p className="sign-up">New to Pictr? <Link className="link" to="/signup">Sign up here</Link></p>
          </form>
          </div>
      </div>
    );
  }
}

export default loginForm;