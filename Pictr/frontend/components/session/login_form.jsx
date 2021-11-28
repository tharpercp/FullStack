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
      this.setState({ [field]: e.currentTarget.value });
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
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="session-form">
        {/* <br/>
        {this.renderErrors()}
        <br/> */}
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
          <button onClick={this.handleSubmit}>Log In!</button>
          <button onClick={this.demoLogin}>Demo Log In</button>
          <p>New to Pictr?  <Link to="/signup">Sign up here</Link></p>
        </form>
      </div>
    );
  }
}

export default loginForm;