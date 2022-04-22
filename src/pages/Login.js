import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmailLogin } from '../actions';
import { store, persistor } from '../store';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const minPassword = 5;
    const { name, value } = target;
    const { email, password } = this.state;
    const ruleEmail = /\S+@\S+\.\S+/;
    this.setState({
      [name]: value,
      isDisabled: !(ruleEmail.test(email) && password.length >= minPassword),
    });
    // let isDisabled = true;
    // if (ruleEmail.test(email) && password.length >= minPassword) {
    //   isDisabled = false;
    // }
    // this.setState({
    //   isDisabled,
    // });
  }
  /* Verificacao de e-mail(regex) baseada no codigo do site:
  https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
   */

  handleClick(event) {
    event.preventDefault();
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    history.push('/carteira');
  }

  render() {
    const { isDisabled, email, password } = this.state;
    console.log(store, persistor);
    return (
      <section className="container-form">
        <form>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                data-testid="email-input"
                id="email"
                placeholder="Digite seu e-mail"
                name="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                data-testid="password-input"
                id="password"
                placeholder="Digite sua senha"
                name="password"
                onChange={ this.handleChange }
                value={ password }
              />
            </label>
          </div>
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (payload) => dispatch(getEmailLogin(payload)),
});

Login.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  getEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
