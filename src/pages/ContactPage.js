import React, { Component } from 'react';
import "../styles/ContactPage.css";
import axios from 'axios'

class ContactPage extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    message: '',

    error: false,
    errMessage: 'yoyoyo',
    success: false,

  }

  handleChange = (e) => {
    let fieldName = e.target.name
    const type = e.target.type;

    if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [fieldName]: checked
      })
    }
    else {
      this.setState({
        [fieldName]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // if (validation.correct) {
    axios({
      method: "POST",
      url: 'api/contact/email.php',
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        this.setState({
          error: false,
          success: true,
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      } else if (response.data.status === 'fail') {
        this.setState({
          success: false,
          error: true,
          errMessage: response.data.error[0]
        })
      }
    })
    // }
  }

  render() {
    return (
      <div className="contactPage">

        <article className="first">
          <div>Your Wellbeing is Our Aspiration</div>
        </article>
        <article className='contactBlock'>
          <h3>Contact Us</h3>
          <form className="contactForm" method="POST" onSubmit={this.handleSubmit} noValidate>

            <div className="contactFormBlock responseMessage">
              {this.state.error && <span className="sendingMessage error">{this.state.errMessage}</span>}
              {this.state.success && <span className="sendingMessage sent">Email sent!</span>}
            </div>

            <div className="contactInputs">
              <div className="contactFormLeft">
                <div className="contactFormBlock">
                  <label htmlFor="name">Name*</label>
                  <input type="text" id="name" name="name" placeholder="Introduce yourself" value={this.state.name} onChange={this.handleChange}></input>
                </div>

                <div className="contactFormBlock">
                  <label htmlFor="phone">Phone</label>
                  <input type="number" id="phone" name="phone" placeholder="Optional, add you number" value={this.state.phone} onChange={this.handleChange}></input>
                </div>

                <div className="contactFormBlock">
                  <label htmlFor="email">Email address*</label>
                  <input type="email" id="email" name="email" placeholder="Add your email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="contactFormRight">
                <div className="contactFormBlock">
                  <label htmlFor="message">Message*</label>
                  <textarea name="message" id="message" placeholder="Enter your message..." value={this.state.message} onChange={this.handleChange}></textarea>
                </div>
              </div>
            </div>

            {/* //RODO CHECK */}
            {/* <div className="contactFormBlock rodo">
              <input type="checkbox" id="checkboxRODO" name="checkboxRODO" checked={this.state.checkboxRODO} onChange={this.handleChange} />
              <label htmlFor="checkboxRODO">
                <p className="checkboxText"> Zgadzam się na przetwarzanie moich danych osobowych na potrzeby obsługi tego zapytania,
               <a target="_blank" href="RODO" style={{ display: 'inline', textDecoration: 'underline' }}>zgodnie z polityką RODO</a>
                </p>
              </label>
            </div> */}

            {/* CAPTCHA */}
            {/* recaptcha - enter sitekey */}
            {/* <div className="g-recaptcha" data-sitekey="enter-key"></div> */}

            <input type="submit" value="Send" className="btn btn--submit" />
          </form>
        </article>

        <div className="bgImage"></div>
      </div>
    )

  }
}

export default ContactPage;