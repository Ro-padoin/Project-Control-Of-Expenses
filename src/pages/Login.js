import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getEmailLogin } from '../actions';

const INITIAL_STATE = {
  isDisabled: true,
  email: '',
  password: '',
};

function Login() {
  const [ stateLocal, setStateLocal] = useState(INITIAL_STATE)
 
  const validationLogin = () => {
    const MIN_PASSWORD = 5;
    const ruleEmail = /\S+@\S+\.\S+/;
    const { email, password } = stateLocal;
    const isDisabled = !(ruleEmail.test(email) && password.length >= MIN_PASSWORD);
    setStateLocal(prevState => (
      { ...prevState, isDisabled}));
  }
  /* Verificacao de e-mail(regex) baseada no codigo do site:
  https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
   */

  const history = useHistory();

  const handleClick = () => {
    getEmailLogin(stateLocal.email);
    history.push('/carteira');
  }

    return (
      <section className="container-form">
        <form>
          <div>
            <label htmlFor="email">
              <input
                id="email"
                name="email"
                onChange={ ({target: { value }}) => {
                  setStateLocal(prevState => ({ ...prevState, email: value}))
                  validationLogin();
                }}
                placeholder="Digite seu e-mail"
                type="email"
                value={ stateLocal.email }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                id="password"
                name="password"
                onChange={({target: { value }}) => {
                  setStateLocal(prevState => ({ ...prevState, password: value}))
                  validationLogin();
                }}
                placeholder="Digite sua senha"
                type="password"
                value={ stateLocal.password }
              />
            </label>
          </div>
          <button
            type="button"
            disabled={ stateLocal.isDisabled }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }

export default Login;
