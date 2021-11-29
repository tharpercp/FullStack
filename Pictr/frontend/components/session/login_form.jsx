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
    // this.renderErrors = this.renderErrors.bind(this);
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

  // renderErrors() {
  //   if (this.props.errors) {
  //     console.log(this.props.errors)
  //     return(
  //       <ul>
  //         {this.props.errors.map((error, i) => (
  //           <li key={i}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   } else {
  //     return null; 
  //   }
  // }

  render() {
    return (
      <div>
        <ul className="emptynav">
            <li><img id="logo" src="https://i.ibb.co/C7SG390/logo-blackbg.jpg"/><strong>pictr</strong></li>
        </ul>
        <div className="session-form">
        <img className="logo" src="https://i.ibb.co/28zgMwN/Logo-whitebg.jpg"/>
        <br/>
        <h2 className="login-text">Log in to Pictr</h2>
        <br/>
        <form className="login-form">
          <label>Username:
          <br/>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
          </label>
          <br/>
          <label>Password:
          <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <br/>
          <button className="session-button" onClick={this.handleSubmit}>Log In!</button>
          <button className="session-button" onClick={this.demoLogin}>Demo Log In</button>
          <p className="sign-up">New to Pictr?  <Link className="link" to="/signup">Sign up here</Link></p>
          </label>
        </form>
        </div>
      </div>
    );
  }
}

export default loginForm;