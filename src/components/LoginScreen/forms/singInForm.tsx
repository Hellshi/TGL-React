import React, { useRef } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SingInStyled from '../styles/singIn';
import api from '../../../services/api';
import { AuthActions } from '../../../store/auth-slice';

const singInForm: React.FC = () => {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postRespnse = await api.post('/user/create', {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        name: nameRef.current?.value,
      });
      const { data } = postRespnse;
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
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  return (
    <SingInStyled>
      <h3>Registration</h3>
      <div className="FormInput">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required ref={emailRef} />
          <input type="text" placeholder="Name" required ref={nameRef} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <div className="buttonsForm">
            <button type="submit">
              Register <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button" onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
    </SingInStyled>
  );
};
export default singInForm;
