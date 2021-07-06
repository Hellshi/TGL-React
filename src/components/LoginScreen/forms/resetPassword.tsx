import React from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import ResetPasswordStyled from '../styles/resetPassword';

const resetPassword: React.FC = () => {
  const history = useHistory();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <ResetPasswordStyled>
      <h3>Reset Password</h3>
      <div className="FormInput">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <div className="buttonsForm">
            <button type="submit">
              Send Link <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      <button type="button" onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
    </ResetPasswordStyled>
  );
};
export default resetPassword;
