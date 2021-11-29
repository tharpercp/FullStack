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
      <div>
        <ul className="emptynav">
            <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/><strong>pictr</strong></li>
          </ul>
        <div className="session-form">
        <img className="logo" src="https://i.ibb.co/28zgMwN/Logo-whitebg.jpg"/>
        <br/>
        <h2 className="login-text">Join Pictr</h2>
        <br/>
        <form className="login-form">
          <label>Username:
          <br/>
          <input
            type="text"
            onChange={this.update('username')}
          />
          </label>
          <br/>
          <label>Password:
          <br/>
          <input
            type="password"
            onChange={this.update('password')}
          />
          <br/>
          <button className="session-button" onClick={this.handleSubmit}>Create Account</button>
          <p className="sign-up">Already have an account? <Link className="link" to="/">Click Here</Link></p>
          </label>
        </form>
        </div>
      </div>
    );
  }
}

export default signupForm;