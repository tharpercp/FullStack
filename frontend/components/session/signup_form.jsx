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
    this.props.processForm(user).then(() => this.props.history.push('/feed'));
  }

  renderErrors() {
    const errors = Object.values(this.props.errors)
    if (errors.length > 0) {
      return(
        <ul>
          {errors.map(error => (
            <li>
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
        <ul className="emptynav">
            <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/></li>
            <li><strong>pictr</strong></li>
        </ul>
        <img className="background" src="https://i.ibb.co/pXvJbpj/pictr-backdrop.jpg"/>
        <div className="session-form">
        <img className="logo" src="https://i.ibb.co/28zgMwN/Logo-whitebg.jpg"/>
        <h6 className="login-text">Sign up for pictr</h6>
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
          <button className="session-button" onClick={this.handleSubmit}><span className="button-text2">Create Account</span></button>
          <div className="errors-container">{this.renderErrors()}</div>
          <p className="sign-up2">Already have an account? <Link className="link" to="/">Click Here</Link></p>
        </form>
        </div>
      </div>
    );
  }
}

export default signupForm;