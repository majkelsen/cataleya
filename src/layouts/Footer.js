import React, { Component } from 'react';
import "../styles/Footer.css";

//static subscribe array. connect with database and push address !!
let newsletterDatabase = [];

class Footer extends Component {
  state = {
    email: "",
    isEmpty: true,
    inputClass: '',

    error: false,
    errMessage: '',
    sent: false,
  }

  //validation error messages
  messages = {
    email_incorrect: "Brak @ w emailu!",
    email_short: "Email za krótki!",
    email_long: "Email za długi - max.40 znaków!",
    email_spacebar: "Błąd w adresie - zawiera spacje!"
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidator()

    //validator checking
    if (validation.correct && this.state.email.length > 1) {
      newsletterDatabase = [...newsletterDatabase, this.state.email]
      console.log(newsletterDatabase)

      this.setState({
        email: "",
        isEmpty: true,
        inputClass: '',
        error: false,
        errMessage: '',
        sent: true,
      })
    }
    else {
      let error;
      if (!validation.short) error = this.messages.email_short
      else if (!validation.monkey) error = this.messages.email_incorrect
      else if (!validation.long) error = this.messages.email_long
      else if (!validation.spacebar) error = this.messages.email_spacebar
      this.setState({
        error: true,
        errMessage: error,
        sent: false,
      })
      console.log(this.state.error, this.state.errMessage)
    }


  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
      inputClass: "entered",
      isEmpty: false

    })
  }

  //validator for entered email
  formValidator() {
    let monkey = false;
    let short = false;
    let long = false;
    let spacebar = false;
    let correct = false;

    if (this.state.email.indexOf('@') !== -1) {
      monkey = true;
    }
    if (this.state.email.length > 7) {
      short = true;
    }
    if (this.state.email.length < 40) {
      long = true;
    }
    if (this.state.email.indexOf(' ') === -1) {
      spacebar = true;
    }
    if (monkey && short && long && spacebar) {
      correct = true
    }
    return ({
      correct, monkey, short, long, spacebar
    })
  }

  //turn off error message after couple of seconds
  componentDidUpdate() {
    console.log("update");
    if (this.state.errMessage !== '') {
      setTimeout(() => this.setState({
        errMessage: ''
      }), 3000)
    }
  }

  render() {
    return (
      <footer>
        <div className="newsletter">
          <div className="newsLeft">
            Newsletter
          </div>
          <div className="newsRight">
            <form onSubmit={this.handleSubmit} noValidate>
              <input value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email Address..." className={this.state.inputClass} />
              <button>Subscribe</button>
            </form>

            {this.state.error && <span className="sendingMessage error">{this.state.errMessage}</span>}
            {this.state.sent && <span className="sendingMessage sent">You have just subscribed us! Its great to have you.</span>}

          </div>

          <div className="submitMessage">
          </div>

          <div className="copywright">©2020 by CATALEYA</div>
        </div>

      </footer>

    )
  }
}

export default Footer;