import React, { Component } from 'react';
import "../styles/ContactPage.css";
import axios from 'axios'

class ContactPage extends Component {
  state = {
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    checkboxRODO: '',

    error: false,
    success: true,
    submitMessage: '',
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

    const validation = this.formValidator()

    if (validation.correct) {
      axios({
        method: "POST",
        url: 'urlToBeSet',
        data: this.state
      }).then(result => {
        this.setState({
          mailSent: result.data.sent,
          success: true,
          submitMessage: 'Wysłano email',
        })
      })

    } else {
      this.setState({
        submitMessage: 'Błąd formularza',
      })
    }
  }

  formValidator() {
    let correct = true;
    return ({
      correct
    })
  }

  render() {
    return (
      <div className="contactPage">

        <article className="first">
          <div>Contact Page</div>
        </article>
        <article className='contactBlock'>
          <h3>FORMULARZ KONTAKTOWY</h3>
          <form className="contactForm" method="POST" action="../components/email.php">

            <div className="contactFormBlock submitMessage">
              {this.state.error && <span className="sendingMessage error">{this.state.submitMessage}</span>}
              {this.state.success && <span className="sendingMessage sent">{this.state.submitMessage}</span>}
            </div>

            <div className="contactFormBlock">
              <label htmlFor="name">Przedstaw się</label>
              <input type="text" id="name" name="name" placeholder="Podaj swoje dane" value={this.state.name} onChange={this.handleChange}></input>
            </div>

            <div className="contactFormBlock">
              <label htmlFor="company">Firma</label>
              <input type="text" id="company" name="company" placeholder="Nie wymagane!" value={this.state.company} onChange={this.handleChange}></input>
            </div>

            <div className="contactFormBlock">
              <label htmlFor="phone">Telefon kontaktowy</label>
              <input type="number" id="phone" name="phone" placeholder="Podaj swój numer.." value={this.state.phone} onChange={this.handleChange}></input>
            </div>

            <div className="contactFormBlock">
              <label htmlFor="email">E-mail zwrotny</label>
              <input type="email" id="email" name="email" placeholder="Podaj swój email.." value={this.state.email} onChange={this.handleChange}></input>
            </div>

            <div className="contactFormBlock">
              <label htmlFor="message">Temat wiadomości</label>
              <input type="text" id="message" name="message" placeholder="Podaj temat wiadomości.." value={this.state.message} onChange={this.handleChange}></input>
            </div>

            <div className="contactFormBlock rodo">
              <input type="checkbox" id="checkboxRODO" name="checkboxRODO" checked={this.state.checkboxRODO} onChange={this.handleChange} />
              <label htmlFor="checkboxRODO">
                <p className="checkboxText"> Zgadzam się na przetwarzanie moich danych osobowych na potrzeby obsługi tego zapytania,
               <a target="_blank" href="RODO" style={{ display: 'inline', textDecoration: 'underline' }}>zgodnie z polityką RODO</a>
                </p>
              </label>
            </div>

            {/* recaptcha - enter sitekey */}
            <div className="g-recaptcha" data-sitekey="enter-key"></div>

            <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />

          </form>
        </article>


      </div>
    )

  }
}

export default ContactPage;