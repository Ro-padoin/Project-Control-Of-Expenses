import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getEmailLogin } from '../actions';
import Button from '../components/Button';
import Input from '../components/Input';

const INITIAL_STATE = {
  isDisabled: true,
  email: '',
  password: '',
};

function Login() {
  const [stateLocal, setStateLocal] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const history = useHistory();

  const validationLoginAndSetStateDisabled = () => {
    const MIN_PASSWORD = 5;
    const ruleEmail = /\S+@\S+\.\S+/;
    const { email, password } = stateLocal;
    const isDisabled = !(ruleEmail.test(email) && password.length >= MIN_PASSWORD);
    setStateLocal(prevState => (
      { ...prevState, isDisabled }));
  }

  return (
    <section className="container-form">
      <form>
        <div>
          <Input
            id="email"
            name="email"
            onChange={({ target: { value } }) => {
              setStateLocal(prevState => ({ ...prevState, email: value }))
              validationLoginAndSetStateDisabled();
            }}
            placeholder="Digite seu e-mail"
            textLabel=""
            type="email"
            value={stateLocal.email}
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            onChange={({ target: { value } }) => {
              setStateLocal(prevState => ({ ...prevState, password: value }))
              validationLoginAndSetStateDisabled();
            }}
            placeholder="Digite sua senha"
            textLabel=""
            type="password"
            value={stateLocal.password}
          />
        </div>
        <Button
          type="button"
          disabled={stateLocal.isDisabled}
          onClick={() => {
            dispatch(getEmailLogin(stateLocal.email));
            history.push('/carteira');
          }}
        >
          Entrar
        </Button>
      </form>
    </section>
  );
}

export default Login;

/* Verificacao de e-mail(regex) baseada no codigo do site:
https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
 */
