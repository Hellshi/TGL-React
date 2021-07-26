/* eslint-disable no-console */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FormDiv from '../styles/login';
import { AuthActions } from '../../../store/auth-slice';
import api from '../../../services/api';

const logginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api
      .post('/login', {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then(({ data }) => {
        dispatch(
          AuthActions.login({
            name: data.user.name,
            email: data.user.email,
            picture: data.user.picture,
            is_admin: data.user.is_admin,
          })
        );
        api.defaults.headers.Authorization = `Bearer ${data.token.token}`;
        history.push('/create-game');
      })
      .catch(() => toast.error('Credenciais de usuário inválidas'));
  };
  return (
    <FormDiv>
      <h3>Authentication</h3>
      <div className="FormInput">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <div className="buttonsForm">
            <button
              type="button"
              className="reset"
              onClick={() => {
                history.push('/reset-password');
              }}
            >
              I forgot my password
            </button>
            <button type="submit">
              Log In <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button" onClick={() => history.push('/sing-in')}>
        Sing Up
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </FormDiv>
  );
};
export default logginForm;
