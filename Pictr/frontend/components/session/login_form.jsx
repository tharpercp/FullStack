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
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    this.props.processForm(this.state)
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({
      username: 'tyler',
      password: 'password',
    }).then(() => this.props.history.push('/feed'));
  }

  renderErrors() {
    if (this.props.errors) {
      console.log(this.props.errors)
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={i}>
              {error}
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
        <ul className="emptynav">
            <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/></li>
            <li><strong>pictr</strong></li>
        </ul>
        <img className="background" src="https://i.ibb.co/pXvJbpj/pictr-backdrop.jpg"/>
        <div className="session-form">
        <img className="logo" src="https://i.ibb.co/28zgMwN/Logo-whitebg.jpg"/>
        <h6 className="login-text">Log in to pictr</h6>
        <form className="login-form">
          <label>Username:</label>
          <input
            type="email"
            value={this.state.username}
            onChange={this.update('username')}
          />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <button className="session-button" onClick={this.handleSubmit}><span className="button-text">Sign in</span></button>
          <button className="session-button" onClick={this.demoLogin}><span className="button-text">Demo</span></button>
          <p className="sign-up">New to Pictr? <Link className="link" to="/signup">Sign up here</Link></p>
        </form>
        </div>
      </div>
    );
  }
}

export default loginForm;