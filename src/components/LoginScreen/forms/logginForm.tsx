import React from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import FormDiv from '../styles/login';
import { AuthActions } from '../../../store/auth-slice';

const logginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history.push('/create-game');
    dispatch(AuthActions.auth());
    history.push('/recent-games');
  };
  return (
    <FormDiv onSubmit={handleSubmit}>
      <h3>Authentication</h3>
      <div className="FormInput">
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
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
